require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-Memory Data Store (replacing MongoDB for now)
const projects = [
  {
    id: 1,
    title: "Velvet",
    category: "Branding",
    video: "https://cdn.pixabay.com/video/2023/10/19/185732-876159677_tiny.mp4",
    description: "Rebranding for a luxury fashion house."
  },
  {
    id: 2,
    title: "Nexus",
    category: "Digital Marketing",
    video: "https://cdn.pixabay.com/video/2023/10/22/186175-877232014_tiny.mp4",
    description: "SEO campaign driving 200% growth."
  },
  {
    id: 3,
    title: "Pulse",
    category: "Social Media",
    video: "https://cdn.pixabay.com/video/2023/09/24/182069-867956976_tiny.mp4",
    description: "Viral TikTok campaign strategy."
  },
  {
    id: 4,
    title: "Strata",
    category: "Web Design",
    video: "https://cdn.pixabay.com/video/2024/01/13/196350-903066347_tiny.mp4",
    description: "Award-winning website redesign."
  }
];

// MongoDB Connection (Commented out for now)
/*
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

const ProjectSchema = new mongoose.Schema({
    title: String,
    category: String,
    video: String, // URL to video
    description: String
});

const Project = mongoose.model('Project', ProjectSchema);
*/

// Routes
app.get('/', (req, res) => {
  res.send("3x Hike API is running...");
});

// Get Projects (In-Memory)
app.get('/api/projects', async (req, res) => {
  // const projects = await Project.find();
  res.json(projects);
});

// Seed Database (In-Memory)
app.get('/api/seed', async (req, res) => {
  // In a real DB, we would insert here. 
  // For now, we just reset the array if needed or do nothing since it's hardcoded.
  console.log("Seeding data...");
  res.json({ message: "Seeded (In-Memory) with Digital Marketing Projects" });
});

// Contact Route
app.post('/contact', async (req, res) => {
  const { name, company, phone, budget, goals } = req.body;

  // Log for debugging/demo purposes
  console.log('Received Contact Form Submission:', { name, company, phone, budget, goals });

  // Configure Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sending to self/owner
    subject: `New 3xHike Lead: ${name} from ${company}`,
    text: `
            New Project Inquiry for 3xHike:
            
            Name: ${name}
            Company: ${company}
            Phone: ${phone}
            Budget: ${budget}
            Goals: ${goals.join(', ')}
        `
  };

  try {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } else {
      console.log('Skipping email send (No credentials configured). Data logged to console.');
    }
    res.status(200).json({ message: 'Inquiry received successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send inquiry' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

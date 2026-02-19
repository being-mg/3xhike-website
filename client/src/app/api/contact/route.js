import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, company, phone, budget, goals } = body;

        console.log('Received Contact Form Submission:', { name, company, phone, budget, goals });

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
              Goals: ${goals ? goals.join(', ') : ''}
          `
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } else {
            console.log('Skipping email send (No credentials configured). Data logged to console.');
        }

        return NextResponse.json({ message: 'Inquiry received successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ message: 'Failed to send inquiry' }, { status: 500 });
    }
}

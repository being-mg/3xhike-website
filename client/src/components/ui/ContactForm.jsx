'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const goals = [
    "Digital Marketing",
    "Web Design",
    "Branding",
    "SEO",
    "Social Media",
    "Content Creation"
];

export default function ContactForm() {
    const [selectedGoals, setSelectedGoals] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        budget: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const toggleGoal = (goal) => {
        if (selectedGoals.includes(goal)) {
            setSelectedGoals(selectedGoals.filter(g => g !== goal));
        } else {
            setSelectedGoals([...selectedGoals, goal]);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.budget < 3000) {
            alert("Budget must be at least 3000 INR");
            return;
        }

        setStatus('sending');

        try {
            const apiUrl = '/api';
            const res = await fetch(`${apiUrl}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    goals: selectedGoals
                })
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', phone: '', budget: '' });
                setSelectedGoals([]);
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative z-10 py-24 px-4 bg-zinc-950 text-white border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">LET'S TALK.</h2>
                    <p className="text-gray-400">Tell us about your project.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-xl"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-xl"
                                placeholder="3xHike"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-xl"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Budget (INR)</label>
                            <input
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                min="3000"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-xl"
                                placeholder="Min 3000"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <label className="text-xs uppercase tracking-widest text-gray-500">What is your goal?</label>
                        <div className="flex flex-wrap gap-4">
                            {goals.map(goal => (
                                <button
                                    type="button"
                                    key={goal}
                                    onClick={() => toggleGoal(goal)}
                                    className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${selectedGoals.includes(goal)
                                        ? 'bg-white text-black border-white'
                                        : 'border-white/20 text-gray-400 hover:border-white/50'
                                        }`}
                                >
                                    {goal}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 text-center">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="bg-white text-black text-lg font-bold px-12 py-4 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Submit Inquiry'}
                        </button>
                        {status === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
                        {status === 'success' && <p className="text-green-500 mt-4">Thank you! We'll be in touch.</p>}
                    </div>
                </form>
            </div>
        </section>
    );
}

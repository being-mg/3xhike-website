import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, company, phone, budget, goals } = body;

        console.log('Received Contact Form Submission:', { name, company, phone, budget, goals });

        // 1. Send Email Notification
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
              Goals: ${goals ? (Array.isArray(goals) ? goals.join(', ') : goals) : ''}
          `
        };

        let emailSent = false;
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            try {
                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
                emailSent = true;
            } catch (err) {
                console.error('Email send error:', err);
            }
        } else {
            console.log('Skipping email send (No credentials configured).');
        }

        // 2. Send to Google Sheets (via Apps Script Web App)
        let sheetSent = false;
        const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
        if (sheetUrl) {
            try {
                const sheetRes = await fetch(sheetUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        timestamp: new Date().toISOString(),
                        name,
                        company,
                        phone,
                        budget,
                        goals: Array.isArray(goals) ? goals.join(', ') : goals
                    })
                });
                if (sheetRes.ok) {
                    console.log('Data sent to Google Sheets successfully');
                    sheetSent = true;
                } else {
                    console.error('Google Sheets submission failed:', await sheetRes.text());
                }
            } catch (err) {
                console.error('Google Sheets fetch error:', err);
            }
        } else {
            console.log('Skipping Google Sheets submission (GOOGLE_SHEET_WEBAPP_URL not configured).');
        }

        return NextResponse.json({
            message: 'Inquiry processed',
            emailSent,
            sheetSent
        }, { status: 200 });

    } catch (error) {
        console.error('Request processing error:', error);
        return NextResponse.json({ message: 'Failed to process inquiry' }, { status: 500 });
    }
}

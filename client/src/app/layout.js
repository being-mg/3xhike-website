'use client';
import './globals.css';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navigation from '../components/ui/Navigation';

export const metadata = {
    title: '3x Hike',
    description: 'Data-Driven Strategies. Stunning Design. Unmatched Growth.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black text-white antialiased selection:bg-red-500 selection:text-white">
                <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
                    <Navigation />
                    {children}
                </ReactLenis>
            </body>
        </html>
    );
}

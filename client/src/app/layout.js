import './globals.css';
import Navigation from '../components/ui/Navigation';
import SmoothScroll from '../components/ui/SmoothScroll';

export const metadata = {
    title: '3x Hike',
    description: 'Data-Driven Strategies. Stunning Design. Unmatched Growth.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black text-white antialiased selection:bg-red-500 selection:text-white">
                <SmoothScroll>
                    <Navigation />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}

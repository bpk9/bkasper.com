import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Brian Kasper | Resume',
    description:
        'Full-Stack Web Developer | 4+ Years Crafting Responsive & Robust Web Applications with JavaScript + React.js | 2x Published iOS & Android Developer'
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

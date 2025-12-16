import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Kasparro - AI-Native SEO & Brand Intelligence',
    description:
        'AI-native SEO & Brand Intelligence platform for the AI-first search era. Optimize your brand visibility across ChatGPT, Gemini, Perplexity, and beyond.',
    keywords: ['AI SEO', 'Brand Intelligence', 'ChatGPT', 'Gemini', 'Perplexity', 'AI Search'],
    authors: [{ name: 'Kasparro' }],
    openGraph: {
        title: 'Kasparro - AI-Native SEO & Brand Intelligence',
        description: 'AI-native SEO & Brand Intelligence platform for the AI-first search era.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="min-h-screen bg-background antialiased">
                {children}
            </body>
        </html>
    );
}

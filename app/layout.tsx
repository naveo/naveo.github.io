import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'naveo Docker Desktop for macOS: The #1 Free and Open Source Docker Desktop Containerization Tool for Developers | Docker',
  description:
    'naveo is a Free and Open Source Docker Desktop Alternative for macOS, and a collaborative containerization software for developers. Get started and download Docker Desktop today on Mac.',
  verification: {
    google: 'u7gqsOgcsd-NerRyF-7w1juNYC79FImODH4nI000bPk',
  },
  alternates: {
    canonical: 'https://naveo.github.io',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

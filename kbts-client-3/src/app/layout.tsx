import '../styles/globals.css';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@Utils/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'KBTS',
    description: 'KAIST BTS',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    as="style"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
                />
            </head>
            <body className={inter.className}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}

import React from "react";
import '@/app/globals.scss';
import img from "@/public/logos/TonkotsuTechLogo.png";

export const metadata = {
    title: 'Tonkotsu Tech Robotics',
    description: 'The official website for Tonkotsu Tech Robotics',
    keywords: 'Tonkotsu, Tech, Robotics',
    icons: [
        {rel: 'manifest', url: `${img.src}`},
        {rel: 'apple-touch-icon', url: `${img.src}`},
        {rel: 'icon', url: `${img.src}`}
    ]
}

export default function RootLayout({children}: { children: React.ReactNode }): React.ReactElement {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

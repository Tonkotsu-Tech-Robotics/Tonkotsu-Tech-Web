"use server";
import React from 'react';
import Head from 'next/head';
import icon from '@/public/logos/OARoboticsLogo_24-25.webp';

type HeadProps = {
    headTitle?: string;
    description?: string;
}

export default async function MainHead({headTitle = "Website", description = "Developed by enVId Tech"}: HeadProps): Promise<React.ReactElement> {
    return (
        <Head>
            <title>Tonkotsu Tech - {headTitle}</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content="Robotics, Rival Robotics, Tonkotsu Tech, Tonkotsu, Rival"/>
            <meta name="author" content="Erick Tran"/>
            <meta name="robots" content="index, follow"/>
            <meta name="theme-color" content="#000000"/>
            <link rel="manifest" href={icon.src}/>
            <link rel="apple-touch-icon" href={icon.src}/>
        </Head>
    )
}
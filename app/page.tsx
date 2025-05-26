"use server";
import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import styles from "@/app/home.module.scss";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import AboutBrief from "@/app/_components/aboutbrief/aboutbrief";
import MainHead from "@/app/_components/head";
import Slogan from "@/app/_components/slogan/slogan";

// Images
import frontBannerImg from "@/public/images/ramenyes.jpg";
import collage2Img from "@/public/images/collage2.png";
import designImg from "@/public/handmade/FrontPageDesign.webp";

export default async function Home(): Promise<React.ReactElement> {
    return (
        <div className={`${styles.homepage}`}>
            <MainHead headTitle={"Home"}/>
            <Navbar isFixed={true}/>
            <Title
                title={"TONKOTSU TECH"}
                description={"Rival Robotics"}
                img1={frontBannerImg}
                img2={designImg}
            />
            <AboutBrief
                img={collage2Img}
                description={"Tonkotsu Tech is a robotics team that is dedicated to building robots and competing in various competitions. We are a team of students who are passionate about robotics and engineering. We are always looking for new members to join our team and help us build amazing robots."}
            />
            <Slogan
                img={[frontBannerImg, frontBannerImg, frontBannerImg]}
                description={"We are a robotics team that is dedicated to building robots and competing in various competitions. We are a team of students who are passionate about robotics and engineering. We are always looking for new members to join our team and help us build amazing robots."}
                title={"Our Goals"}
            />
            <Footer/>
        </div>
    )
}
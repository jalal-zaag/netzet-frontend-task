import React from 'react';
import Header from "@/components/homepage/Header";
import HeroMain from "@/components/homepage/HeroMain";

const Hero = () => {
    return (
        <div className="bg-black h-[calc(100vh-53px)] overflow-hidden h">
            <div className="container mx-auto relative">
                <Header/>
                <HeroMain/>
            </div>
        </div>
    );
};

export default Hero;

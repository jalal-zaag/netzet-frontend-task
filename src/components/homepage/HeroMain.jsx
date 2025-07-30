import React from 'react';
import {Images} from "@/helpers/Images";
import Image from "next/image";
import HeroList from "@/components/homepage/HeroList";

const HeroMain = () => {
    return (
        <div className="flex justify-between mt-[-87px] ">
            <div className=" pt-[57px] w-[516px] whitespace-nowrap z-[99]">
                <p className="text-white font-bold text-[35px] ">
                    Want to Turn Social Media Into a <br/> Profitable Career?
                </p>
                <p className="font-bold text-[35px] text-subtext-f9 text-shadow-fametonic"> Discover your way to success
                    with
                    Fametonic:</p>

                <HeroList/>

            </div>

            <div className="w-[666px] min-w-[666px] max-h-[600px] z-[10]">
                <Image
                    src={Images.InflueMobileMockup}
                    alt="Mockup"
                    width={900}
                    height={900}
                    // className="w-full h-full object-contain"
                    className="w-full h-full object-contain"
                    priority
                />
            </div>
        </div>
    );
};

export default HeroMain;

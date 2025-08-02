import React from 'react';
import {Images} from "@/helpers/Images";
import Image from "next/image";
import HeroList from "@/components/homepage/HeroList";
import HeroFooter from "@/components/homepage/HeroFooter";
import MobileHeader from "@/components/homepage/MobileHeader";

const HeroMain = () => {
    return (
        <div className="lg:flex justify-between lg:mt-[-87px] relative">

            <MobileHeader/>

            {/*MOBILE, TABLET IMAGE*/}
            <div className="w-full h-[426px] sm:h-[500px] z-[10] lg:hidden block ">
                <Image
                    src={Images.InflueMobileMockupMobile}
                    alt="Mockup"
                    width={900}
                    height={900}
                    className="w-full h-full "
                />
            </div>


            <div
                className="relative lg:absolute lg:pt-[75px] lg:w-[540px] z-[99] text-center lg:text-left lg:mt-0 md:mt-[-40px] sm:mt-[-80px] mt-[-75px]">
                <p className=" text-white font-bold text-[25px] lg:text-[35px] ">
                    Want to Turn Social Media Into a Profitable Career?
                </p>
                <p className="font-bold text-[25px] lg:text-[35px] text-subtext-f9 text-shadow-fametonic"> Discover your
                    way to
                    success <br/>
                    with Fametonic:</p>

                <div className="mt-4">
                    <HeroList/>
                </div>

                <div className="block lg:hidden">
                    <HeroFooter/>
                </div>

                <div className="lg:w-[313px]">
                    <button
                        className="w-full justify-center mt-[30px] bg-primary text-white py-2 rounded-full shadow-btnGlow flex gap-[10px] item-center font-bold text-[20px]"
                    >
                        <span>GET STARTED</span>
                        <div className=" h-[6px] pt-[5px]">
                            <Image
                                src={Images.RightArrow}
                                alt="Mockup"
                                width={11}
                                height={6}
                            />
                        </div>
                    </button>

                    <p className="text-[12px] text-white text-center mt-[10px]">1-minute quiz for personalized
                        Insights</p>

                </div>

                <div className="hidden lg:block">
                    <HeroFooter/>
                </div>


            </div>


            <div>

            </div>

            {/*DESKTOP IMAGE*/}
            <div className="md:w-[400px] lg:w-[666px] h-[679px] z-[10] lg:block hidden">
                <Image
                    src={Images.InflueMobileMockup}
                    alt="Mockup"
                    width={900}
                    height={900}
                    // className="w-full h-full object-contain"
                    className="w-full h-full"
                    priority
                />
            </div>
        </div>
    );
};

export default HeroMain;

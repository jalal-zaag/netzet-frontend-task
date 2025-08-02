import React from 'react';
import {Images} from "@/helpers/Images";
import Image from "next/image";
import HeroList from "@/components/homepage/HeroList";

const HeroMain = () => {
    return (
        <div className="flex justify-between mt-[-67px] relative">
            {/*<div className=" pt-[57px] w-[516px] whitespace-nowrap z-[99]">*/}
            {/*<div className=" pt-[57px] w-[516px] whitespace-nowrap z-[99]">*/}
            {/*    <p className="text-white font-bold text-[35px]">*/}
            {/*        Want to Turn Social Media Into a <br/> Profitable Career?*/}
            {/*    </p>*/}
            {/*    <p className="font-bold text-[35px] text-subtext-f9 text-shadow-fametonic"> Discover your way to*/}
            {/*        success <br/>*/}
            {/*        with Fametonic:</p>*/}

            {/*    <div className="mt-4">*/}
            {/*        <HeroList/>*/}
            {/*    </div>*/}

            {/*    <div className="w-[313px]">*/}
            {/*        <button*/}
            {/*            className="w-full justify-center mt-[30px] bg-primary text-white py-2 rounded-full shadow-btnGlow flex gap-[10px] item-center font-bold text-[20px]"*/}
            {/*        >*/}
            {/*            <span>GET STARTED</span>*/}
            {/*            <div className=" h-[6px] pt-[5px]">*/}
            {/*                <Image*/}
            {/*                    src={Images.RightArrow}*/}
            {/*                    alt="Mockup"*/}
            {/*                    width={11}*/}
            {/*                    height={6}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </button>*/}

            {/*        <p className="text-[12px] text-white text-center mt-[10px]">1-minute quiz for personalized*/}
            {/*            Insights</p>*/}

            {/*        <p className="text-[12px] font-medium text-subtext-AB mt-[30px]">*/}
            {/*            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription*/}
            {/*            Terms*/}
            {/*        </p>*/}

            {/*        <p className="text-[10px] font-medium text-subtext-AB mt-3">*/}
            {/*            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription*/}
            {/*            Terms*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*</div>*/}

            <div className="absolute pt-[57px] w-[540px] z-[99]">
                <p className="text-white font-bold text-[35px]">
                    Want to Turn Social Media Into a Profitable Career?
                </p>
                <p className="font-bold text-[35px] text-subtext-f9 text-shadow-fametonic"> Discover your way to
                    success <br/>
                    with Fametonic:</p>

                <div className="mt-4">
                    <HeroList/>
                </div>

                <div className="w-[313px]">
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

                    <p className="text-[12px] font-medium text-subtext-AB mt-[30px]">
                        By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription
                        Terms
                    </p>

                    <p className="text-[10px] font-medium text-subtext-AB mt-3">
                        By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription
                        Terms
                    </p>
                </div>

            </div>


            <div>

            </div>

            {/*<div className="w-[666px] min-w-[666px] max-h-[600px] z-[10]">*/}
            <div className="w-[666px] max-h-[679px] z-[10]">
                <Image
                    src={Images.InflueMobileMockup}
                    alt="Mockup"
                    width={900}
                    height={900}
                    // className="w-full h-full object-contain"
                    className="w-full h-full "
                    priority
                />
            </div>
        </div>
    );
};

export default HeroMain;

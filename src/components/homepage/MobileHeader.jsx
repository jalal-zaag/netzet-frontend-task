import React from 'react';
import Image from "next/image";
import {Images} from "@/helpers/Images";

const MobileHeader = () => {
    return (
        <div className="absolute top-[16px] w-full ">
            <div className=" flex items-center lg:hidden justify-between">
                <Image
                    src={Images.Logo}
                    alt="Logo"
                    width={107}
                    height={46}
                    className="object-cover"
                />


                <div className="w-[20px] h-[12px]">
                    <Image
                        src={Images.HamburgerMenu}
                        alt="Logo"
                        width={20}
                        height={12}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;
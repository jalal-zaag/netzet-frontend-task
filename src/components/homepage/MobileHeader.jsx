import React from 'react';
import Image from "next/image";
import {Images} from "@/helpers/Images";

const MobileHeader = () => {
    return (
        <div className="absolute top-[16px] w-full px-4">
            <div className="grid grid-cols-3 items-center lg:hidden">
                {/* Column 1: Empty */}
                <div></div>

                {/* Column 2: Centered Logo */}
                <div className="justify-self-center">
                    <Image
                        src={Images.Logo}
                        alt="Logo"
                        width={107}
                        height={46}
                        className="object-cover"
                    />
                </div>

                {/* Column 3: Right-Aligned Hamburger */}
                <div className="w-[20px] h-[12px] justify-self-end">
                    <Image
                        src={Images.HamburgerMenu}
                        alt="Menu"
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
import React from 'react';
import Image from "next/image";
import {Images} from "@/helpers/Images";

const Header = () => {
    return (
        <div className="flex justify-between pt-[35px] pb-[57px]">
            <Image
                src={Images.Logo}
                alt="Logo"
                width={170}
                height={73}
                className="object-cover"
            />

            <div className="flex gap-[40px] text-subtext-A9 font-sembold text-[18px]">
                <a href="#" className="text-white hover:underline">About us</a>
                <a href="#" className="text-white hover:underline">Contact</a>
            </div>
        </div>
    );
};

export default Header;
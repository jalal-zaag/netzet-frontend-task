// import React from 'react';
// import {Images} from "@/helpers/Images";
// import Image from "next/image";
//
// const HeroMain = () => {
//     return (
//         <div className="relative flex justify-end mt-[-87px]">
//             {/* Image section aligned to the right */}
//             {/*<div className="w-[666px] h-[679px]">*/}
//             {/*    <Image*/}
//             {/*        src={Images.InflueMobileMockup}*/}
//             {/*        alt="Mockup"*/}
//             {/*        width={666}*/}
//             {/*        height={679}*/}
//             {/*        className="w-full h-full"*/}
//             {/*        priority*/}
//             {/*    />*/}
//             {/*</div>*/}
//             <div className="w-[600px]">
//                 <Image
//                     src={Images.InflueMobileMockup}
//                     alt="Logo"
//                     width={666}
//                     height={679}
//                     // className="object-contain w-[600px]  h-[400px]"
//                     className="w-[666px]  h-[679px]"
//                 />
//             </div>
//
//             {/* Text section overlapping from the left */}
//             <div
//                 className="absolute left-0 top-[87px]  max-w-[540px] ">
//                 <p className="text-white font-bold text-[35px]"> Want to Turn Social Media Into a Profitable Career?</p>
//             </div>
//         </div>
//     );
// };
//
// export default HeroMain;


import React from 'react';
import {Images} from "@/helpers/Images";
import Image from "next/image";

const HeroMain = () => {
    return (
        <div className="flex justify-between  mt-[-87px]">
            <div className="flex pt-[57px] text-white font-bold text-[35px]">
                Want to Turn Social Media Into a Profitable Career?
            </div>
            <div className="w-[600px]">
                <Image
                    src={Images.InflueMobileMockup}
                    alt="Logo"
                    width={900}
                    height={679}
                    // className="object-contain w-[600px]  h-[400px]"
                    className="w-[666px]  h-[679px]"
                />
            </div>
        </div>
    );
};

export default HeroMain;
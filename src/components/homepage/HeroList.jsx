import React from 'react';

const HeroList = () => {
    const text = (value) => {
        return <div className="text-white font-semibold text-[16px]">
            <span className="mr-[10px]">✨</span> {value}
        </div>;
    };

    return (
        <div className="flex flex-col gap-[13px]">
            {text("Start growing your influence right away—no waiting required!")}
            {text("Create viral TikToks and Reels step by step with easy-to-follow lessons")}
            {text("Use a Personal AI Worker to boost your content")}
            {text("Learn from expert-led courses designed for aspiring influencers")}
        </div>
    );
};

export default HeroList;

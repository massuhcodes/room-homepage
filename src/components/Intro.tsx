// Intro.tsx

import arrow from "../assets/icon-arrow.svg"

export const Intro = () => {
    return (
        <div className="py-20 md:pb-0 px-10 intro">
            <span className="text-[3rem] md:text-[3.1rem] leading-[2.7rem] font-semibold">Discover innovative ways to decorate</span>
            <p className="text-[#A0A0A0] mt-4 text-[1.1rem] md:text-lg">
            We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
            </p>
            <div className="flex items-center mt-4 shop-now-hover cursor-pointer">
            <span className="uppercase tracking-[0.8rem] mr-4 text-[1.1rem] md:text-lg">shop now</span>
            <img src={arrow} alt="arrow pointing to the right"/>
            </div>
        </div>
    )
}
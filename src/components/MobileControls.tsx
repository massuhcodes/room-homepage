// MobileControls.tsx

import left from "../assets/icon-angle-left.svg"
import right from "../assets/icon-angle-right.svg"
import { prevSlide, nextSlide } from "../utils/utils"

export const MobileControls = () => {
    return (
        <div className="flex bg-black absolute bottom-0 right-0 md:hidden">
            <img src={left} alt="left angle" className="hover:bg-[#444444] py-5 px-7 cursor-pointer" onClick={prevSlide} />
            <img src={right} alt="right angle" className="py-5 px-7 hover:bg-[#444444] cursor-pointer" onClick={nextSlide}/>
        </div>
    )
}
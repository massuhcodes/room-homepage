// DesktopControls.tsx

import left from "../assets/icon-angle-left.svg"
import right from "../assets/icon-angle-right.svg"
import { prevSlide, nextSlide } from "../utils/utils"

export const DesktopControls = () => {
    return (
        <div className="flex desktop-controls bg-black items-center">
        <img src={left} alt="left angle" className="hover:bg-[#444444] py-7 px-8 cursor-pointer" onClick={prevSlide}/>
        <img src={right} alt="right angle" className="hover:bg-[#444444] py-7 px-8 cursor-pointer" onClick={nextSlide}/>
    </div>
    )
}
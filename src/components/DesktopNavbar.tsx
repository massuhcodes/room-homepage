// DesktopNavbar.tsx

import hamburger from "../assets/icon-hamburger.svg"
import { revealNavbar } from "../utils/utils"

export const DesktopNavbar = () => {
    return (
        <div className="absolute top-0 w-full flex items-center h-28 pl-7 pr-[3.25rem]">
            <img src={hamburger} alt="hamburger-icon" className="w-6 cursor-pointer md:invisible" onClick={revealNavbar}/>
            <h1 className="text-white text-4xl w-full md:w-auto text-center">room</h1>
            <ul className="ml-16 text-white text-lg pt-2 hidden md:inline-flex flex-wrap">
            <li className="desktop-list-hover mr-10"><a href="home">home</a></li>
            <li className="desktop-list-hover mr-10"><a href="shop">shop</a></li>
            <li className="desktop-list-hover mr-10"><a href="about">about</a></li>
            <li className="desktop-list-hover"><a href="contact">contact</a></li>
            </ul>
      </div>
    )
}
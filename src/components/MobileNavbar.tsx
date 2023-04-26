// MobileNavbar.tsx

import close from "../assets/icon-close.svg"
import { hideNavbar } from "../utils/utils"
hideNavbar

export const MobileNavbar = () => {
    return (
        <div id="navbar" className="bg-white w-full h-28 absolute top-0 left-0 flex items-center justify-between -translate-y-28 px-7">
            <img src={close} alt="close-icon" className="cursor-pointer w-5" onClick={hideNavbar}/>
            <ul className="flex">
                <li className="list-hover mr-10"><a href="home">home</a></li>
                <li className="list-hover mr-10"><a href="shop">shop</a></li>
                <li className="list-hover mr-10"><a href="about">about</a></li>
                <li className="list-hover"><a href="contact">contact</a></li>
            </ul>
        </div>
    )
}
// App.tsx

import left from "../src/assets/icon-angle-left.svg"
import right from "../src/assets/icon-angle-right.svg"
import arrow from "../src/assets/icon-arrow.svg"
import hamburger from "../src/assets/icon-hamburger.svg"
import close from "../src/assets/icon-close.svg"
import { useState } from "react"

export default function App() {

  const [navbarActiveState, setNavbarActiveState] = useState<boolean>(false)

  const handleNavbar = () => {
    const shadow = document.getElementById("shadow") as HTMLDivElement
    const navBar = document.getElementById("navBar") as HTMLDivElement
    shadow.classList.toggle("hidden")
    navBar.classList.toggle("hidden")
    setNavbarActiveState((prevState: boolean): boolean => {
      return !prevState
    } )
  }

  const revealNavbar = () => {
    const navbar = document.getElementById("navbar") as HTMLDivElement
    navbar.classList.add("reveal-navbar")
    navbar.classList.remove("hide-navbar")
  }

  const hideNavbar = () => {
    const navbar = document.getElementById("navbar") as HTMLDivElement
    navbar.classList.add("hide-navbar")
    navbar.classList.remove("reveal-navbar")
  }

  return (
    <div className="h-full relative">
      {/** Hero */}
      <div className="relative">
        <img src="../src/assets/mobile-image-hero-1.jpg" alt="A table, chair, and bonsai tree" className="w-full" />
        <div className="absolute top-0 w-full flex items-center bg-black h-28 px-7">
          <img src={hamburger} alt="hamburger-icon" className="w-6 cursor-pointer" onClick={revealNavbar} />
          <h1 className="text-white text-4xl">room</h1>
        </div>
        <div className="flex bg-black absolute bottom-0 right-0">
          <img src={left} alt="left angle" className="hover:bg-[#444444] py-5 px-7" />
          <img src={right} alt="right angle" className="py-5 px-7 hover:bg-[#444444]" />
        </div>
      </div>

      {/** Intro */}
      <div className="py-20 px-10">
        <span className="text-[3rem] leading-[2.7rem]">Discover innovative ways to decorate</span>
        <p className="text-[#A0A0A0] mt-5">
          We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
        </p>
        <div className="flex items-center mt-9 shop-now-hover cursor-pointer">
          <span className="uppercase tracking-[0.8rem] mr-4">shop now</span>
          <img src={arrow} alt="arrow pointing to the right"/>
        </div>
      </div>

      <img src="../src/assets/image-about-dark.jpg" alt="A chair and small table" className="w-full" />

      {/** About */}
      <div className="py-11 px-10">
        <span className="uppercase tracking-[0.4rem] font-bold">about our furniture</span>
        <p className="text-[#A0A0A0] mt-5">
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>

      <img src="../src/assets/image-about-light.jpg" alt="A brightened chair" className="w-full" />

      <div id="shadow" className="bg-[#00000095] w-full absolute top-0 bottom-0 hidden">
      </div>
      <div id="navbar" className="bg-white w-full h-28 absolute top-0 left-0 flex items-center justify-between -translate-y-28 px-7">
        <img src={close} alt="close-icon" className="cursor-pointer w-5" onClick={hideNavbar}/>
        <ul className="flex">
          <li className="list-hover mr-10"><a href="home">home</a></li>
          <li className="list-hover mr-10"><a href="shop">shop</a></li>
          <li className="list-hover mr-10"><a href="about">about</a></li>
          <li className="list-hover"><a href="contact">contact</a></li>
        </ul>
      </div>
    </div>
  )
}

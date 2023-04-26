// App.tsx

import { slideIndex, displaySlide } from "./utils/utils"
import { Hero } from "./components/Hero"
import { useEffect } from "react"
import { Intro } from "./components/Intro"
import { About } from "./components/About"
import { DesktopControls } from "./components/DesktopControls"
import { Shadow } from "./components/Shadow"
import { MobileNavbar } from "./components/MobileNavbar"

export default function App() {

  useEffect(() => {
    displaySlide(slideIndex)
  }, [])

  return (
    <div id="app" className="h-full relative app">
      <Hero/>
      <Intro />
      <img src="../src/assets/image-about-dark.jpg" alt="A chair and small table" className="w-full object-cover wooden-table-dark-chair" />
      <About />
      <DesktopControls />
      <img src="../src/assets/image-about-light.jpg" alt="A brightened chair" className="w-full object-cover brightened-chair" />
      <Shadow />
      <MobileNavbar />
    </div>
  )
}

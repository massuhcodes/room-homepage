// Hero.tsx

import { DesktopNavbar } from "./DesktopNavbar"
import { MobileControls } from "./MobileControls"

export const Hero = () => {
    return (
        <div className="relative hero">
            <img alt="A table, chair, and bonsai tree" className="content-[url(./src/assets/mobile-image-hero-1.jpg)] md:content-[url(./src/assets/desktop-image-hero-1.jpg)] md:h-full md:max-h-full w-full max-h-[400px] object-cover object-bottom hero-img fade" />
            <img alt="A table, chair, and bonsai tree" className="content-[url(./src/assets/mobile-image-hero-2.jpg)] md:content-[url(./src/assets/desktop-image-hero-2.jpg)] md:h-full md:max-h-full w-full max-h-[400px] object-cover object-bottom hero-img fade" />
            <img alt="A table, chair, and bonsai tree" className="content-[url(./src/assets/mobile-image-hero-3.jpg)] md:content-[url(./src/assets/desktop-image-hero-3.jpg)] md:h-full md:max-h-full w-full max-h-[400px] object-cover object-bottom hero-img fade" />
            <DesktopNavbar />
            <MobileControls />
      </div>
    )
}
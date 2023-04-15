// App.tsx

import hamburger from "../src/assets/icon-hamburger.svg"
import left from "../src/assets/icon-angle-left.svg"
import right from "../src/assets/icon-angle-right.svg"
import arrow from "../src/assets/icon-arrow.svg"

export default function App() {

  return (
    <div className="bg-red-500 h-full">
      <img src={hamburger} alt="hamburger-icon" />
      <h1>room</h1>
      <img src="../src/assets/mobile-image-hero-1.jpg" alt="A table, chair, and bonsai tree" />
      <img src={left} alt="left angle" />
      <img src={right} alt="right angle" />
      <span>discover innovative ways to decorate</span>
      <p>
        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
      </p>
      <span>shop now</span>
      <img src={arrow} alt="arrow pointing to the right" />
      <img src="../src/assets/image-about-dark.jpg" alt="A chair and small table" />
      <span>about our furniture</span>
      <p>
        Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
      </p>
      <img src="../src/assets/image-about-light.jpg" alt="A brightened chair" />
    </div>
  )
}

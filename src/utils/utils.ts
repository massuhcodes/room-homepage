// utils.ts


window.addEventListener("resize", (ev: UIEvent) => {
    if (document.body.clientWidth >= 768) {
      hideNavbar()
    }
  })

export const revealNavbar = () => {
    const navbar = document.getElementById("navbar") as HTMLDivElement
    const app = document.getElementById("app") as HTMLDivElement
    app.classList.add("overflow-hidden")
    navbar.classList.add("reveal-navbar")
    navbar.classList.remove("hide-navbar")
    const shadow = document.getElementById("shadow") as HTMLDivElement
    shadow.classList.add("reveal-shadow")
    shadow.classList.remove("hide-shadow")
  }

  export const hideNavbar = () => {
    const navbar = document.getElementById("navbar") as HTMLDivElement
    const app = document.getElementById("app") as HTMLDivElement
    app.classList.remove("overflow-hidden")
    navbar.classList.add("hide-navbar")
    navbar.classList.remove("reveal-navbar")
    const shadow = document.getElementById("shadow") as HTMLDivElement
    shadow.classList.add("hide-shadow")
    shadow.classList.remove("reveal-shadow")
  }

  export let slideIndex = 1;
  export const prevSlide = () => displaySlide(slideIndex -= 1)
  export const nextSlide = () => displaySlide(slideIndex += 1)
  export const displaySlide = (current: number) => {
    let slides = document.getElementsByClassName("hero-img") as HTMLCollectionOf<HTMLImageElement>;
    if (current > slides.length) slideIndex = 1;
    if (current < 1) slideIndex = slides.length;
    for (let index = 0; index < slides.length; index++) {
      slides[index].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"
  }
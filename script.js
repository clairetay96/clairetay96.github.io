const scrollPosition = document.documentElement.scrollTop

let aboutPosition = 0
let skillsPosition = document.getElementById("skills").offsetTop
let portfolioPosition = document.getElementById("portfolio").offsetTop
let contactPosition = document.body.offsetHeight - window.innerHeight

let scrollSetter = ()=>{
    if(window.scrollY >= aboutPosition && window.scrollY < skillsPosition){

    document.getElementById("nav-about").classList.add("current-section")

    document.getElementById("nav-skills").classList.remove("current-section")
    document.getElementById("nav-portfolio").classList.remove("current-section")
    document.getElementById("nav-contact").classList.remove("current-section")


    } else if ( window.scrollY >= skillsPosition && window.scrollY < portfolioPosition){

    document.getElementById("nav-skills").classList.add("current-section")

    document.getElementById("nav-about").classList.remove("current-section")
    document.getElementById("nav-portfolio").classList.remove("current-section")
    document.getElementById("nav-contact").classList.remove("current-section")


    } else if (window.scrollY >= portfolioPosition && window.scrollY < contactPosition){

    document.getElementById("nav-portfolio").classList.add("current-section")

    document.getElementById("nav-skills").classList.remove("current-section")
    document.getElementById("nav-about").classList.remove("current-section")
    document.getElementById("nav-contact").classList.remove("current-section")

    } else if ( window.scrollY >= contactPosition){

    document.getElementById("nav-contact").classList.add("current-section")

    document.getElementById("nav-portfolio").classList.remove("current-section")
    document.getElementById("nav-skills").classList.remove("current-section")
    document.getElementById("nav-about").classList.remove("current-section")
    }
}

scrollSetter()

window.addEventListener('scroll', scrollSetter)
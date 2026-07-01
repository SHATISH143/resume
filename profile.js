/* ======================================
   Portfolio JavaScript
====================================== */

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

        nav.classList.remove("active");

    });

});

// ===============================
// Active Navigation
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements=document.querySelectorAll(
".hero,.about,.skill-card,.project,.timeline-item,.testimonial-box,form"
);

function reveal(){

    const trigger=window.innerHeight-120;

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// Typing Animation
// ===============================

const textArray=[

"Full Stack Developer",

"Frontend Developer",

"UI/UX Designer",

"Web Designer"

];

let textIndex=0;

let charIndex=0;

const typingElement=document.querySelector(".hero-left h2");

function typeText(){

    if(!typingElement) return;

    typingElement.textContent=textArray[textIndex].substring(0,charIndex);

    charIndex++;

    if(charIndex<=textArray[textIndex].length){

        setTimeout(typeText,120);

    }else{

        setTimeout(deleteText,1800);

    }

}

function deleteText(){

    typingElement.textContent=textArray[textIndex].substring(0,charIndex);

    charIndex--;

    if(charIndex>=0){

        setTimeout(deleteText,60);

    }else{

        textIndex++;

        if(textIndex>=textArray.length){

            textIndex=0;

        }

        setTimeout(typeText,400);

    }

}

typeText();

// ===============================
// Skill Card Hover Effect
// ===============================

const skills=document.querySelectorAll(".skill-card");

skills.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;
        const y=e.offsetY;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#f5b94233,#2b2d36)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#2b2d36";

    });

});

// ===============================
// Portfolio Hover Animation
// ===============================

const projects=document.querySelectorAll(".project");

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.transform="translateY(-10px)";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.transform="translateY(0px)";

    });

});

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#f5b942";
topBtn.style.color="#111";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Footer Current Year
// ===============================

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=`© ${new Date().getFullYear()} Your Name | All Rights Reserved`;

}

// ===============================
// Console Message
// ===============================

console.log("%cPortfolio Loaded Successfully 🚀",
"color:#f5b942;font-size:18px;font-weight:bold;");
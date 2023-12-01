//---- nav bar ----
let tl = gsap.timeline();

function navBar() {
    const menubar = document.querySelector(".bar");
    const crossmenu = document.querySelector(".cross");
    const ul = document.querySelector(".ul");

    menubar.addEventListener("click", () => {
        gsap.from(ul, {
            x: -100,
            duration: .5
        })
        ul.classList.add("sidebar");
        ul.style.display = "block";
        menubar.style.display = "none";
        crossmenu.style.display = "block";

    })
    crossmenu.addEventListener("click", () => {
        gsap.from(ul, {
            x: -200
        })
        crossmenu.style.display = "none";
        menubar.style.display = "block";
        ul.style.display = "none";
        ul.classList.remove("sidebar");
    })



    // navbar afeter scroll

    gsap.to("nav", {
        boxShadow: "rgba(0, 0, 0, 0.45) 0px 19px 20px -20px",
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top -15%",
            scrub: true
        }
    })
    tl.from("nav .logo",{
        x: -300,
        duration:.5,
        rotate:200
    })
    tl.from("nav .ul",{
        y:-200,
        duration:.5,
        rotate:30
    })
}
navBar();


// this is me GSAP 
function thisme() {
    tl.from(".me-left h2", {
        scale: 0,
        duration: .5
    })

    tl.from(".me-left h1", {
        scale: 0,
        x: -800,
        duration: .5
    })
    tl.from(".me-left P", {
        scale: 0,
        duration: .5
    })
    tl.from(".me-left .me-butn .btn1", {
        y: 500,
        scale: 0,
        duration: .5,
        rotate: 360
    })

    // gsap on button 
    const leftbtn = document.querySelector(".me-butn");
    const mlCursor = document.querySelector(".me-cursor");
    leftbtn.addEventListener("mouseenter", () => {
        gsap.to(mlCursor, {
            opacity: 1000,
            scale: 1
        })
    })
    leftbtn.addEventListener("mouseleave", () => {
        gsap.to(mlCursor, {
            opacity: 0,
            scale: 0
        })
    })
    leftbtn.addEventListener("mousemove", (e) => {
        gsap.to(mlCursor, {
            left: e.x - 65,
            top: e.y - 25
        })
    })

    // smooth scrolling 
    const thisMe = document.querySelector(".this-me");
    const home = document.querySelector("#home").addEventListener("click",()=>{
        thisMe.scrollIntoView({behavior: "smooth"});
    })


}
thisme();

// About me gasp
function aboutMe() {
    const abbtn = document.querySelector(".ab-butn");
    const abCursor = document.querySelector(".ab-cursor");
    abbtn.addEventListener("mouseenter", () => {
        gsap.to(abCursor, {
            opacity: 1000,
            scale: 1
        })
    })
    abbtn.addEventListener("mouseleave", () => {
        gsap.to(abCursor, {
            opacity: 0,
            scale: 0
        })
    })
    abbtn.addEventListener("mousemove", (e) => {
        gsap.to(abCursor, {
            left: e.x - 65,
            top: e.y - 25
        })
    })

    // scroll smooth 
    const aboutMe = document.querySelector(".about-me");
    document.querySelector("#about").addEventListener("click",()=>{
        aboutMe.scrollIntoView({ behavior: "smooth"});
    })

}
aboutMe();


// my offered services 
function myOffServices() {

    const servicesBottom = document.querySelector(".services_bottom");
    const serCursor = document.querySelector(".ser_bot_cursor");

    servicesBottom.addEventListener("mouseenter", () => {
        gsap.to(serCursor, {
            opacity: 1,
            scale: 1
        })
    })

    servicesBottom.addEventListener("mouseleave", () => {
        gsap.to(serCursor, {
            opacity: 0,
            scale: 0,
        })
    })

    servicesBottom.addEventListener("mousemove", (e) => {
        gsap.to(serCursor, {
            left: e.x - 15,
            top: e.y - 10,
        })
    })

    // scroll smooth 
    const myServices = document.querySelector(".my_services");
    document.querySelector("#services").addEventListener("click",()=>{
        myServices.scrollIntoView({behavior: "smooth"});
    })
}
myOffServices();


// random num 
function randomNum() {
    const count = document.querySelectorAll(".count");
    let speed = 200;
    count.forEach((mycount) => {
        let targetCount = mycount.dataset.count;
        let initCount = +mycount.innerText

        const newCount = Math.floor(targetCount / speed);

        const updateNumber = () => {
            initCount = initCount + newCount;
            mycount.innerText = initCount;

            if (initCount < targetCount) setTimeout(() => { updateNumber() }, 1)
        }

        updateNumber();
    })

    // custom cursor 

}
randomNum();


// our latest featured projects 
function lateFeatProject() {
    const lfpBtns = document.querySelector(".lfp-btns");
    const lfpBtn = document.querySelectorAll(".btn");

    const lfpImgOberlay = document.querySelectorAll(".img-oberlay");

    lfpBtns.addEventListener("click", (i) => {
        const btnChecked = i.target;
        console.log(btnChecked);

        //---- to find the number of btn ----

        const btnNumber = btnChecked.dataset.btnNum;
        console.log(btnNumber);

        // 2.find img number 
        const activeImg = document.querySelectorAll(`.p-btn--${btnNumber}`);

        lfpImgOberlay.forEach((curlement) => {
            curlement.classList.add("p-img-notactive");
        })

        activeImg.forEach((curlement) => {
            curlement.classList.remove("p-img-notactive");
        })

        gsap.from(activeImg, {
            scale: 0,
            y: 500
        })
    })
}
lateFeatProject();



// --- Client’s Feedback About Me -----

// 1. client-detail-slider
function clentDetailSlide() {
    const clientSlider = document.querySelectorAll(".client-slider");
    container = 0;
    const previous = document.querySelector(".btn-up");
    const next = document.querySelector(".btn-down");

    clientSlider.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })

    // next btn 
    next.addEventListener("click", () => {
        if (container < clientSlider.length - 1) {
            container++;
            clientDivSlider();
        }
    })

    // prev btn  
    previous.addEventListener("click", () => {
        if (container != 0) {
            container--;
            clientDivSlider();
        }
    })

    const clientDivSlider = () => {
        clientSlider.forEach((slide) => {
            slide.style.transform = `translateX(-${container * 100}%)`;
        })
    }

}
clentDetailSlide();





//------------ choose your plan -------------

const cypCardBtn = document.querySelector(".cyp-card-btn");
const cypCardH1 = document.querySelector(".cyp-card-h1");

// card 1
const card1 = document.querySelector(".card1");
const cyppara = document.querySelectorAll(".card1 p");
const cyphead4 = document.querySelector(".card1 h4");
const cypOne = document.querySelector(".cyp-one");
const cypTxtOne = document.querySelector(".cyp-txt-one");

function cypcard1() {

    card1.addEventListener("mouseenter", (e) => {
        cardMouseIn();
        cyppara.forEach((e) => {
            e.style.color = "white";
            e.style.fontSize = ".9rem";
        })
        card1.style.width = "23vw";
        cyphead4.style.fontSize = "1.4rem";
        cyphead4.style.color = "white";
        cypOne.style.width = "45%";
        cypOne.style.backgroundColor = "#bdd5fb";
        cypOne.style.padding = "2rem";
        cypTxtOne.style.backgroundColor = "#82AEFE";
        cypTxtOne.style.color = "white";
    })

    card1.addEventListener("mouseleave", (f) => {
        cardMouseOut();
        cyppara.forEach((e) => {
            e.style.color = "";
            e.style.fontSize = "";
        })
        card1.style.width = "";
        cyphead4.style.fontSize = "";
        cyphead4.style.color = "";
        cypOne.style.width = "";
        cypOne.style.backgroundColor = "";
        cypOne.style.padding = "";
        cypTxtOne.style.backgroundColor = "";
        cypTxtOne.style.color = "";
    })
}
cypcard1();


// card 2
const card2 = document.querySelector(".card2");

// card 3



// card 4



function cardMouseIn() {
    cypCardBtn.style.display = "block";
    cypCardH1.style.display = "none";
}
function cardMouseOut() {
    cypCardBtn.style.display = "none";
    cypCardH1.style.display = "block";
}




// ---- brand area
// function brandArea() {
//     const baLogo = document.querySelectorAll(".ba-logo");
//     baContainer = 0;
//     const baprev = document.querySelector(".baprev");
//     const banext = document.querySelector(".banext");



//     baLogo.forEach((slide, index) => {
//         slide.style.left = `${index * 100}%`
//     });



//     // setInterval(()=>{

//     if (baContainer != 0) {
//         baContainer--;
//         baImgSlide();
//     }
//     // },500)

//     setInterval(() => {
//         if (baContainer < baLogo.length - 1) {
//             baContainer++;
//             baImgSlide();
//         }
//     }, 500)


//     const baImgSlide = () => {
//         baLogo.forEach((slide) => {
//             slide.style.transform = `translateX(-${baContainer * 100}%)`;
//         })
//     }

// }
// brandArea();








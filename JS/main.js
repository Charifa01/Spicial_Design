
// images slider
let myArray = ['../imgs/img1.jpeg','../imgs/img2.png','../imgs/img3.jpeg','../imgs/img4.jpeg','../imgs/img5.jpeg'];
let landing = document.querySelector(".landing");
let backgroundImg ;
let randomOption = false;

function randomImages(){
    if(randomOption == true){
        backgroundImg = setInterval(() => {
            let nb = Math.floor(Math.random() * myArray.length);
            landing.style.backgroundImage = "url('" +myArray[nb]+"')";
        }, 6000);
    }else{
         clearInterval(backgroundImg);
    }
}
randomImages();

// start setting box
let icon = document.querySelector(".setting_box .icon");
let settingBox = document.querySelector(".setting_box");
icon.addEventListener('click', function() {
    document.querySelector(".setting_box .icon i").classList.toggle("fa-spin");
    settingBox.classList.toggle("open");
    icon.classList.toggle("opn");
});

//Settings Box Change Colors Option
let buttons = document.querySelectorAll(".color button");
let h1 =document.querySelector(".introduction_text h1");

buttons.forEach((li) => {
    li.addEventListener("click",(e) =>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        
        if(e.target.dataset.color == "#F26804"){
            h1.style.background ="var(--main-orange-background)";
            h1.style.webkitBackgroundClip ='text';
            h1.stylewebkitTextFillColor = 'transparent';
        }
        else if(e.target.dataset.color == "#53E0FF"){
            h1.style.background ="var(--main-blue-background)";
            h1.style.webkitBackgroundClip ='text';
            h1.stylewebkitTextFillColor = 'transparent';
        }
        else if(e.target.dataset.color == "#ffcc00"){
            h1.style.background ="var(--main-yellow-background)";
            h1.style.webkitBackgroundClip ='text';
            h1.stylewebkitTextFillColor = 'transparent';
        }
        else if(e.target.dataset.color == "#66ff33"){
            h1.style.background ="var(--main-green-background)";
            h1.style.webkitBackgroundClip ='text';
            h1.stylewebkitTextFillColor = 'transparent';
        }
        else if(e.target.dataset.color == "#cc33ff"){
            h1.style.background ="var(--maim-violet-background)";
            h1.style.webkitBackgroundClip ='text';
            h1.stylewebkitTextFillColor = 'transparent';
        }
    })
})
//Random Backgrounds Option
let mySpans = document.querySelectorAll(".box span");
mySpans.forEach((el) =>{
    el.addEventListener("click",(e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
            ele.classList.remove("active");
        }) 
        e.target.classList.add("active");                  
    })
})

document.querySelector("[data-background='yes']").addEventListener('click',(e)=>{
    randomOption = true;
    localStorage.randomOpt = true;
    randomImages();
    console.log(randomOption);
})
document.querySelector("[data-background='no']").addEventListener('click',(e)=>{
    randomOption = false;
    localStorage.randomOpt = false;
    randomImages();
    console.log(randomOption);
})
let Bullets = document.querySelector('.nav-bullets');
document.querySelector("[data-display='Show']").addEventListener('click',(e)=>{
    Bullets.style.display = "block";
})
document.querySelector("[data-display='hidden']").addEventListener('click',(e)=>{
    Bullets.style.display = "none";
})

/* Start Our Skills Section */

let Spans = document.querySelectorAll(".Skill-box span");
let OurSkills =document.querySelector(".ourSkills");
window.onscroll = function(){
    let skillsOffsetTop = OurSkills.offsetTop;
    let skillsHeight = OurSkills.offsetHeight ;
    let windowHeight = this.innerHeight;
    let windowScroll = this.pageYOffset;
     if(windowScroll > (skillsOffsetTop + skillsHeight - windowHeight - 200)){
        Spans.forEach((el)=>{
            el.style.width = el.dataset.progress;
        })
     }
     /* Start Timeline Section */
    let left = document.querySelectorAll('.timeLine-content .left');
    let right = document.querySelectorAll('.timeLine-content .right');
    let timeLineSection = document.querySelector('.timeline');
    let TimelineOffsetTop = timeLineSection.offsetTop;
    let TimelineHeight  = timeLineSection.offsetHeight;
    
    left.forEach((el)=>{
        if(windowScroll >(TimelineOffsetTop - TimelineHeight +300) ){
            el.style.left ="0";
        }
    })
    right.forEach((el)=>{
        if(windowScroll >(TimelineOffsetTop - TimelineHeight +500) ){
            el.style.right = "0";
        }
    })
    // About Us section
    let AboutUs = document.querySelector('.aboutUs');
    let aboutUs_box = document.querySelector('.aboutUs .box');
    let aboutUs_Img = document.querySelector('.aboutUs img');
    let aboutUs_Height = AboutUs.offsetHeight;
    if(windowScroll > (windowHeight - aboutUs_Height)){
        aboutUs_box.style.left = "30px";
        aboutUs_Img.style.right = "90px";
    }
    
/* end Timeline Section */
}

/* Start the Popup Box craetion  */
myImgs = document.querySelectorAll('.gallery img');
myImgs.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);

         /* Create Popup Box */
        let popup_box = document.createElement('div');
        popup_box.className = 'popup-box';
        overlay.appendChild(popup_box);

              /* Create heading */
        if(el.alt !== null){
            let popup_header = document.createElement('h3');
            let textNode = document.createTextNode(el.alt);
            popup_header.appendChild(textNode);
            popup_box.appendChild(popup_header);
        }

         /* Create image in Popup Box */
        let popup_img = document.createElement('img');
        popup_img.src = el.src;
        popup_box.appendChild(popup_img);
        
        /*Create The Close Spane */
        let closeSpan =  document.createElement('span');
        let closeSpanText = document.createTextNode('X');

        closeSpan.appendChild(closeSpanText);
        closeSpan.className = "close-Span";
        popup_box.appendChild(closeSpan);

        document.addEventListener('click',(e) =>{
            
            if(e.target.className =='close-Span'){
                document.querySelector('.popup-overlay').remove();
            }
        })

    })
})
/* End the opup Box craetion  */
/* Start Create scroll to function */
let myBullets = document.querySelectorAll('.nav-bullets .bullet');
let links =document.querySelectorAll(".header ul a");

function ScrollTo(elements){
    elements.forEach(el =>{
        el.addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })  
        })
    })
}
ScrollTo(myBullets);
ScrollTo(links);

/* End Create scroll to function */

// reset button
let reset_button = document.querySelector(".reset");
reset_button.addEventListener('click', ()=>{
    window.location.reload();
})





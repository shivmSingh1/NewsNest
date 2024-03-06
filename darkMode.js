let darkMode= document.querySelector("#darkMode")
let navbar=document.querySelector(".navbar")
let bodyBackground=document.querySelector(".body-background")
let navText=document.querySelectorAll(".textColor")
let logo=document.querySelector(".logo");
let cards = document.querySelectorAll(".card")
let dropdown=document.querySelector(".dropdownBackground");
let dropdownColors=document.querySelectorAll(".dropdownColor")


 function darkColor(){
    logo.setAttribute("src","Image.png") 
    navbar.style.background="rgb(20, 20, 20)"
    bodyBackground.style.background="rgb(8, 8, 8)";
    dropdown.style.background="black"
    dropdownColors.forEach(dropdownColor => {
        dropdownColor.style.color="rgb(233, 233, 233)"
    });
    let cards = document.querySelectorAll(".card")
        cards.forEach(card => {
            // card.style.background="rgb(30, 30, 30)";
            // card.style.color="rgb(233, 233, 233)";
            card.classList.remove("whiteCardColor")
            card.classList.add("blackCardColor")
        });
  
    navText.forEach(textColor => {
        textColor.style.color="rgb(233, 233, 233)"
    });
}



function whiteColor(){
    logo.setAttribute("src","flogo-removebg-preview.png")
    navbar.style.background="#e7e9e4"
    bodyBackground.style.background="rgb(247, 245, 245)"
    dropdown.style.background="white"
    dropdownColors.forEach(dropdownColor => {
        dropdownColor.style.color="black" 
    });
    let cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.classList.remove("blackCardColor")
        card.classList.add("whiteCardColor")
    });
    navText.forEach(textColor => {
        textColor.style.color="black";
    });
}


darkMode.addEventListener("click",()=>{
    if(darkMode.innerText==="Dark"){
       darkColor()
       darkMode.innerText="Light"
    }else{
        whiteColor()
        darkMode.innerText="Dark" 
    }
})
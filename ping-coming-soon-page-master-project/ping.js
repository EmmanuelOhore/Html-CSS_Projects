const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const btn = document.querySelector(".form button"); 
const para1 = document.querySelector("#para");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

btn.addEventListener("click", (e) => { 
    const email=input.value.trim()
    if (emailRegex.test(email)){
        input.setAttribute("placeholder", "valid")
        input.classList.remove("input-clicked");
        para1.classList.remove("input-clicked-text");
        para1.classList.add("hide");
        input.value= ""
    }else {
        input.classList.add("input-clicked");
        para1.classList.add("input-clicked-text");
        para1.classList.remove("hide");
        input.setAttribute("placeholder", "example@email/com")  
        input.value= "" 
    } 

});


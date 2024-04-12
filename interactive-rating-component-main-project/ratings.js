document.addEventListener("DOMContentLoaded", () => {
const rating= document.querySelectorAll(".main-page li");
const btn = document.querySelector(".main-page #submit")
const text= document.querySelector(".thank-you #selected")
const main= document.querySelector(".main-page")
const back = document.querySelector(".thank-you .back")
const thank = document.querySelector(".thank-you")
let selectedValue= null




rating.forEach(numbers=> {
    numbers.addEventListener("click",(e)=>{
        selectedValue= numbers.innerText
        rating.forEach(item => {
            item.classList.remove("clicked");
        });
        numbers.classList.add("clicked")
      
    })
});

btn.addEventListener("click", ()=>{
    if(selectedValue==null){
        alert("please select a rating")
        return
       }
   text.innerText= `You selected ${selectedValue} out of 5`
   main.classList.toggle("display") 
   if(thank.classList.contains("display")) {
    thank.classList.remove("display")
   }  
 
})

back.addEventListener("click", ()=>{
   thank.classList.toggle("display") 
  
})
});




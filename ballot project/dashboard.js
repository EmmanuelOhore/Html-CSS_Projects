const container = document.querySelector(".container");
const expand_btn = document.querySelector(".expand-btn");
const menu = document.querySelector(".container .menu");
const aside = document.querySelector("aside");
const cancel = document.querySelector("  aside .top div.close span");

let activeIndex;

console.log(container); // Debugging: Check if container is selected
console.log(expand_btn); // Debugging: Check if expand button is selected
console.log(menu); // Debugging: Check if menu is selected
console.log(aside); // Debugging: Check if aside is selected

expand_btn.addEventListener("click", () => {
  console.log('Expand button clicked'); // Debugging: Check if the click event is firing
  document.body.classList.toggle("collapsed");
  container.classList.toggle('collapsed-container');
});

menu.addEventListener("click", () => {
  console.log('Menu clicked'); // Debugging: Check if the click event is firing
  aside.classList.toggle("active");
});

cancel.addEventListener("click", ()=>{
    aside.classList.toggle("active")
})

function clock(){
    let monthnames=["january", "february","March","April","May","june","July","August","september","octobr","november","december"]
    let daynames=["sunday","Monday","tuesday","wednesday","thursday","friday","Saturday"]
    let today= new Date()
    
    document.getElementById("Date").innerHTML=(daynames[today.getDay()]+" "+ today.getDate()+" "+monthnames[today.getMonth()]+" "+ today.getFullYear())
    
    let h= today.getHours()
    let m=today.getMinutes()
    let s=today.getSeconds()
    let day= h<11?"AM":"PM"
    h= h<10? "0"+h: h;
    m= m<10? "0"+m: m;
    s= s<10? "0"+s: s;
    
    document.querySelector("#hours").innerText=h
    document.querySelector("#min").innerText=m
    document.querySelector("#sec").innerText=s
    
    }let inter=setInterval(clock,400)
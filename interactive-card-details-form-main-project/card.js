const cardName= document.querySelector("#cardholder")
const cardNum= document.querySelector("#cardNum")
const expMM= document.querySelector("#MM")
const expYY= document.querySelector("#YY")
const cvc = document.querySelector("#cvc")
const confirm= document.querySelector(".btn")
// test for if a varibale is a string
const stringPattern = /^[A-Za-z\s'-]+$/; 
// test for if a varible is a tring of digits
const digitPattern = /^\d+$/;


confirm.addEventListener("click", (e)=>{
    e.preventDefault()
    let nameHolder= document.querySelector(".card-name h2")
    if (stringPattern.test(cardName.value) || cardName.value===""){
        nameHolder.innerText= cardName.value
    }else{
        alert("Please input a name")
    }
    cardName.value=""

    let expDate= document.querySelector("#Exp")
    // the month and year have to be converted into an integer as if we leave it like that it will remain a string
    // so im gonna be usig the pasrint meathod
    let month= parseInt(expMM.value,10)
    let year= parseInt(expYY.value,10)
    // so im testing for if the exp date is a number 
    if(digitPattern.test(expMM.value) && digitPattern.test(expYY.value) && month >=1 && month <=12 && year>=1 && year<=99){
        expDate.innerText= `${expMM.value}/${expYY.value}`
    }else{
        alert("date and/or year does not match")
    }
    expMM.value=""
    expYY.value=""

    let cardCvc =document.querySelector("#cardCVC")
    if(digitPattern.test(cvc.value)&& cvc.value.length <=3){
        cardCvc.innerText = cvc.value
    }else{
        alert("please enter valid cvc number")
    }
    cvc.value=""

    let cardnumber= document.querySelector("#card-number")
    if(digitPattern.test(cardNum.value) && cardNum.value.length === 16){
        let inputted = cardNum.value;
        // need to put a space at the end of every 4th number
        let updatedInput1= inputted.slice(0, 4);
        let updatedInput2= inputted.slice(4, 8);
        let updatedInput3= inputted.slice(8, 12);
        let updatedInput4= inputted.slice(12, 16);
        cardnumber.innerText=  `${updatedInput1} ${updatedInput2} ${updatedInput3} ${updatedInput4}`;
    }else{
        alert("card number is invalid")
    }
    cardNum.value=""


})

const CeBtn = document.querySelector("#ce");
const backBtn = document.querySelector("#back");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");
const commaBtn = document.querySelector("#comma");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const splitBtn = document.querySelector("#split");
const equalBtn = document.querySelector("#equal");

const mathResult = document.querySelector("#math-result");
const ingredients = document.querySelectorAll('.ingredient');

function calcEngine(){
    const clickedDigits = [];
    
//place beside clicked numbers in mathresult place
//how?
//
//create variable for inputed number
//how to create it?
    let mathResultHtml = mathResult.innerHTML;
    
    
    
    for(let ingredient of ingredients){
        
        let cellInnerHtml = ingredient.getElementsByTagName('h2')[0].innerHTML;
        
        console.log(cellInnerHtml)
        ingredient.addEventListener('click', function(){     
            clickedDigits.push(cellInnerHtml.toString())     
            
            console.log(clickedDigits)
            console.log(clickedDigits.join(''))

        });
    }
    
};

calcEngine();
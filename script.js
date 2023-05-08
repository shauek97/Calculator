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
const operators = document.querySelectorAll('.operator')

function calcEngine(){
    const clickedDigits = [];
    const typedNumbers = [];
//place beside clicked numbers in mathresult place
//how?
//
//create variable for inputed number
//how to create it?
    
    for(let ingredient of ingredients){
        
        let cellInnerHtml = ingredient.getElementsByTagName('h2')[0].innerHTML;
        console.log(cellInnerHtml)

       
        ingredient.addEventListener('click', function(){     
           
            clickedDigits.push(cellInnerHtml)     
               
            mathResult.innerHTML = clickedDigits.join('');

            console.log(clickedDigits)
            console.log(clickedDigits.join(''))
        }); 
    }

    for(let operator of operators){
        operator.addEventListener('click', function(){
            typedNumbers.push(clickedDigits.join(''));
            console.log(parseFloat(typedNumbers));
        });
    };
    
};

calcEngine();



// teraz mam pobrac zmienna pierwszej wpisanej liczby
// klikniecie operatora ma wtłoczyć liczbe do tablicy - wtłacza
// jednoczesnie ma wyjebac samego operatora z tej tablicy
// kliknięcie = ma wykonywać działanie pomiędzy jedną liczbą w tablicy a drugą
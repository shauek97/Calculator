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
const digits = document.querySelectorAll('.digit')

function calcEngine(){
    let displayIngredients = [];    
    let clickedIngredients = [];
    let typedNumbers = [];
    

//place beside clicked numbers in mathresult place
//how?
//
//create variable for inputed number
//how to create it?
    
    for(let ingredient of ingredients){
        
        let ingredientInnerHtml = ingredient.getElementsByTagName('h2')[0].innerHTML;
        console.log(ingredientInnerHtml)

       
        ingredient.addEventListener('click', function(){     
           
            clickedIngredients.push(ingredientInnerHtml) 
            displayIngredients.push(ingredientInnerHtml)
            let displayedCombination = displayIngredients.join('');

            mathResult.innerHTML = displayedCombination;

            console.log(clickedIngredients)
            console.log(clickedIngredients.join(''))
        }); 
    }

    for(let operator of operators){
        operator.addEventListener('click', function(){
            
            let typedNumber = parseFloat(clickedIngredients.join(''));
            typedNumbers.push(typedNumber);
            clickedIngredients = [];
            console.log(typedNumber);
            console.log(typedNumbers)
        });
    };
    
};

calcEngine();



// teraz mam pobrac zmienna pierwszej wpisanej liczby
// klikniecie operatora ma wtłoczyć liczbe do tablicy - wtłacza
// jednoczesnie ma wyjebac samego operatora z tej tablicy
// kliknięcie = ma wykonywać działanie pomiędzy jedną liczbą w tablicy a drugą


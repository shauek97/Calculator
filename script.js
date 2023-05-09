function calcEngine(){
    const CeBtn = document.querySelector("#ce");
    const equalBtn = document.querySelector("#equal");

    const mathResult = document.querySelector("#math-result");
    const ingredients = document.querySelectorAll('.ingredient');
    const operators = document.querySelectorAll('.operator');
    const digits = document.querySelectorAll('.digit');

    
    let displayIngredients = [];    
    let clickedIngredients = [];
    let typedNumbers = [];
    let mergedCalculation = clickedIngredients.join('');

//place beside clicked numbers in mathresult place
//how?
//
//create variable for inputed number
//how to create it?
    
    for(let ingredient of ingredients){
        
        let ingredientInnerHtml = ingredient.getElementsByTagName('h2')[0].innerHTML;
   
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
            typedNumbers.push(this.getElementsByTagName('h2')[0].innerHTML)
            
            console.log(mergedCalculation)
            console.log(typedNumber);
            console.log(typedNumbers)
        });
    };

    equalBtn.addEventListener('click', function(){

       let finalResult = eval(clickedIngredients.join(''));
       mathResult.innerHTML = finalResult;

    })
    
};

calcEngine();



// teraz mam pobrac zmienna pierwszej wpisanej liczby
// klikniecie operatora ma wtłoczyć liczbe do tablicy - wtłacza
// jednoczesnie ma wyjebac samego operatora z tej tablicy
// kliknięcie = ma wykonywać działanie pomiędzy jedną liczbą w tablicy a drugą


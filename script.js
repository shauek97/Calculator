function calcEngine(){

    const ceBtn = document.querySelector("#ce");
    const backBtn = document.querySelector("#back");
    const equalBtn = document.querySelector("#equal");

    const mathResult = document.querySelector("#math-result");
    const ingredients = document.querySelectorAll('.ingredient');

    let clickedIngredients = [];

    for(let ingredient of ingredients){
        
        let ingredientInnerHtml = ingredient.getElementsByTagName('h2')[0].innerHTML;
   
        ingredient.addEventListener('click', function(){     
           
            clickedIngredients.push(ingredientInnerHtml);
            
            let mergedCalculation = clickedIngredients.join('');
            mathResult.innerHTML = mergedCalculation;

            console.log(clickedIngredients);
            console.log(clickedIngredients.join(''));
        }); 
    };

    ceBtn.addEventListener('click', function(){
        clickedIngredients = [];
        let mergedCalculation = clickedIngredients.join('');
        mathResult.innerHTML = mergedCalculation;
    })

    backBtn.addEventListener('click', function(){
        console.log('dsad')
        clickedIngredients.pop(-1);
        let mergedCalculation = clickedIngredients.join('');
        mathResult.innerHTML = mergedCalculation;
        console.log(clickedIngredients);
    });

    equalBtn.addEventListener('click', function(){
       let finalResult = eval(clickedIngredients.join(''));
       mathResult.innerHTML = finalResult;
       clickedIngredients = [];
       clickedIngredients.push(finalResult.toString())
       console.log(clickedIngredients)
    });
};

calcEngine();


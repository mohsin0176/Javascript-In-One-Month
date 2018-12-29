
//BUDGET CONTROLLER
var budgetController = (function(){
    // Some code
})();


// UI CONTROLLER
var UIController = (function(){
    var DOMStrings = {
        inputType : ".add__type",
        inputDescription : ".add__description",
        inputValue : ".add__value"
    };
    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMStrings.inputType).value, // Will be wither inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
            
        }
    }
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem = function(){
        //1. get the filed input data

        var input = UICtrl.getInput();
        console.log(input);

        //2. Add the item to the budget controller

        //3. Add the item to UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    }

    document.querySelector(".add__btn").addEventListener("click",ctrlAddItem);

    document.addEventListener("keypress",function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();            
        }
    });
})(budgetController,UIController);

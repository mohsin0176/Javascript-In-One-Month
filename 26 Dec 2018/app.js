
//BUDGET CONTROLLER
var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;        
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;        
    };    
    
    var data = {
        allItems : {
            exp : [],
            inc : []            
        },
        totals : {
            exp : 0,
            inc : 0
        }
    };

    return {
        addItem : function(type, des, val){
            var newItem, ID;
            
            // ID = last ID + 1
            // create new id   
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }                     
            

            //create new item based  on "inc" or "exp" type
            if(type === "exp"){
                newItem = new Expense(ID,des, val);
            }else if(type === "inc"){
                newItem = new Income(ID, des, val);
            }      
            
            //pusht it into our data structure
            data.allItems[type].push(newItem);
            /*notes start
            look, this [type] will only be either "inc" or "exp".
            so, here instead of using if else, we have used this
            small trick 
            notes end*/

            // return the new element
            return newItem;
        },
        testing : function(){
            console.log(data);
        }
    }
})();


// UI CONTROLLER
var UIController = (function(){
    var DOMStrings = {
        inputType : ".add__type",
        inputDescription : ".add__description",
        inputValue : ".add__value",
        inputBtn : ".add__btn",
        incomeContainer : ".income__list",
        expensesContainer : ".expenses__list" 
    };
    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMStrings.inputType).value, // Will be wither inc or exp
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }            
        },

        addListItem : function(obj, type){
            var html, newHtml, element;
            // to do
            // create HTML string with placeholder text
            if(type === "inc"){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === "exp"){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }                         

            //replace the placeholder text with some actual data
            newHtml = html.replace("%id%",obj.id);
            newHtml = newHtml.replace("%value%",obj.value);
            newHtml = newHtml.replace("%description%",obj.description);

            // insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields : function(){
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.inputDescription + "," + DOMStrings.inputValue);
            // document.querySelectorAll this returns a list. but we 
            // need an array. that's why, we are casting this list into
            // an array using this below code here
            fieldsArray = Array.prototype.slice.call(fields);
            
            // below here is a very special callBack function
            // it takes three parameters and it automatically
            // detects the fields and values
            // this is cool

            fieldsArray.forEach(function(current, index, array){
                current.value = "";
            });
        },

        getDomStrings : function(){
            return DOMStrings;
        }
    }
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function(){        
        var DOM = UICtrl.getDomStrings();
        document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem);
        document.addEventListener("keypress",function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();            
            }
        });
    };    

    var ctrlAddItem = function(){
        var input, newItem;
        //1. get the filed input data
        input = UICtrl.getInput();

        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add the item to UI
        UICtrl.addListItem(newItem, input.type);

        //4. Clear the fields
        UICtrl.clearFields();

        //5. Calculate the budget

        //6. Display the budget on the UI
    }
    return {
        init : function(){
            setupEventListeners();
        }
    };
    
})(budgetController,UIController);

controller.init();
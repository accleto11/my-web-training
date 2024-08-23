
//connect html element to js
let inputDisplay = document.getElementById("input-display");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("delete");
const equals = document.getElementById("equals");

//set the variables for num1, operator, num2, result

let num1 = '';
let num2 = '';
let operator = '';
const opsigns = ["+", "-", "*", "/"];
let result = 0;
let displayArray = [];


//add event listener to each buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.textContent;

        //prevent operator and equals if num1 is empty
        if(btnValue === "=" && !num1) {
            return 0;
            //do nothing if there's no num1
        }

        if (opsigns.includes(btnValue)) {
            if (num1 && !num2){
                operator = btnValue;
                displayArray = inputDisplay.value = operator;
            } else if (result) { //equals is click && operator is click
                calculate();
                operator = btnValue;
                displayArray = inputDisplay.value = result;
                num1 = result;
                num2 = '';
            } else if (!result) { //equals is not click && operator is click
                calculate();
                operator = btnValue;
                displayArray = inputDisplay.value = result;
                num1 = result;
                num2 = '';
                }
        } else if (!operator) {
            num1 += btnValue;
            displayArray = inputDisplay.value = num1;
        } else {
                num2 += btnValue;
                displayArray = inputDisplay.value = num2;
        }

        updateDisplay(btnValue);
    })
});

//create a function to update input display

const updateDisplay = (btnValue) => {
    displayArray;
}
 
//create calculate function

const calculate = () => {
    if (num1 && operator && num2) {
       switch(operator) {
        case "+" :
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case "-" :
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "*" :
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case "/" :
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            break;
       }
       displayArray = inputDisplay.value = result;
       return result;
    }
}

equals.addEventListener('click', calculate);

const clearDisplay = () => {
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
    displayArray = [];
    inputDisplay.value = '';
}

clearBtn.addEventListener('click', clearDisplay);



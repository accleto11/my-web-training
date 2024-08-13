// simple calculator

const computeBtn = document.querySelector("#compute");

function calc() {
    const value1 = parseInt(document.querySelector("#value1").value);
    const value2 = parseInt(document.querySelector("#value2").value);
    const operator = document.querySelector("#ope").value;
    const answer = document.querySelector("#answer");
    let calculate;

    if (operator === "add") {
        calculate = value1 + value2;
    } else if (operator === "sub") {
        calculate = value1 - value2;
    } else if (operator === "mul") {
        calculate = value1 * value2;
    } else if (operator === "div") {
        calculate = value1 / value2;
    }
    answer.textContent = calculate;
}
    
computeBtn.addEventListener('click', calc);

function resetCalc() {
    let value1 = document.querySelector("#value1");
    let value2 = document.querySelector("#value2");
    const calcAnswer = document.getElementById("answer");
    value1.value = "";
    value2.value = "";
    calcAnswer.textContent = "";
}

let resetCalcBtn = document.getElementById("resetCalc");
resetCalcBtn.addEventListener('click', resetCalc)


// check if you are allowed to enter

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function youCanEnter() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    name = capitalize(name);
    let greetings1 = "Hello, " + name + " you are " + age+ " years old. Please enter now."; 
    let greetings2 = "Sorry, " + name + " you are " + age+ " years old. Seniors are not allowed. Please go home and take a rest."; 
    let greetings3 = "Hello, " + name + " you are " + age+ " years old. Minors are not allowed to enter."; 
    let canEnter = false;
    const message = document.getElementById("message");

    if (name.length !== 0 && age.length !== 0 && !isNaN(age)) {
        if (age >= 60) {
            canEnter = false;
            message.textContent = greetings2;
        } else if (age > 18 && age < 60) {
            canEnter = true;
            message.textContent = greetings1;
        } else {
            canEnter = false;
            message.textContent = greetings3;
        }
    } else {
        message.textContent = "Please enter your name and age!";
    }
}

// enter values

let enter = document.getElementById("enter");
enter.addEventListener('click', youCanEnter);

// reset values

function resetValues() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    const message = document.getElementById("message");

    name.value = "";
    age.value = "";
    message.textContent = "";
}


let reset = document.getElementById("reset");
reset.addEventListener('click', resetValues);

// check if name is on the list


const firstNames = ["Em", "John", "Jane", "Michael", "Emily", "David", "Sarah", "Robert", "Jessica", "Daniel", "Laura"];

const lastNames = ["Cleto", "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Wilson", "Martinez"];



function checkName() {
    let customerName = document.getElementById("customerName").value.trim();
    customerName = capitalize(customerName);
    let messageBox = document.getElementById("messageBox");
    let greetings1 = `Hello, ${customerName}. Your name is on the list. Please enter now. Enjoy your meal.`;
    let greetings2 = `Hello, ${customerName}. Sorry, your name is not on the list. Please book an appointment first. Thank you.`;

    let nameFound = false;

    if (customerName.length !== 0 && isNaN(customerName)) {
        for (let i = 0; i < firstNames.length; i++) {
            if (customerName === firstNames[i]) {
                nameFound = true;
                break;
            }
        }
            if (nameFound) {
                messageBox.textContent = greetings1;
            } else {
                messageBox.textContent = greetings2;
            }
    } else {
        messageBox.textContent = "Please enter customer's name";
    }
}
// check firstName Only

// const checkNameBtn = document.getElementById("check");
// checkNameBtn.addEventListener('click', checkName);

// function checkReset() {
//     let name = document.getElementById("customerName");
//     name.value = "";
//     let messageBox = document.getElementById("messageBox");
//     messageBox.textContent = "";
// }


// let resetName = document.getElementById("checkReset");
// resetName .addEventListener('click', checkReset);

// check firstname and lastname

function checkName() {
    let customerName = document.getElementById("customerName").value.trim();
    let customerLastName = document.getElementById("customerLastName").value.trim();
    customerName = capitalize(customerName);
    customerLastName = capitalize(customerLastName);
    let messageBox = document.getElementById("messageBox");
    let greetings1 = `Hello, ${customerName} ${customerLastName}. Your name is on the list. Please enter now. Enjoy your meal.`;
    let greetings2 = `Hello, ${customerName} ${customerLastName}. Sorry, your name is not on the list. Please book an appointment first. Thank you.`;

    let nameFound = false;

    if (customerName.length !== 0 && customerLastName.length !== 0 && isNaN(customerName) && isNaN(customerName)) {
        for (let i = 0; i < firstNames.length; i++) {
            for (let j = 0; i < lastNames.length; i++) {
                if (customerName === firstNames[i] && customerLastName === lastNames[i]) {
                    nameFound = true;
                    break;
                }
            }
            
        }
            if (nameFound) {
                messageBox.textContent = greetings1;
            } else {
                messageBox.textContent = greetings2;
            }
    } else {
        messageBox.textContent = "Please enter customer's name";
    }
}

const checkNameBtn = document.getElementById("check");
checkNameBtn.addEventListener('click', checkName);

function checkReset() {
    let name = document.getElementById("customerName");
    name.value = "";
    let lastName = document.getElementById("customerLastName");
    name.value = "";
    lastName.value = "";
    let messageBox = document.getElementById("messageBox");
    messageBox.textContent = "";
}


let resetName = document.getElementById("checkReset");
resetName .addEventListener('click', checkReset);
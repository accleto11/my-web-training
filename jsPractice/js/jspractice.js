// alert("hello");

// const incrementBtn = document.getElementById("increment");
// const decrementBtn = document.getElementById("decrement");
// const resetBtn = document.getElementById("resetBtn");
// const resultBox = document.getElementById("resultBox");
// let count = 0;

// function increment() {
//     count++;
//     resultBox.textContent = count;
// }

// function decrement() {
//     count--;
//     resultBox.textContent = count;
// }

// function resetIncrement() {
//     count = 0;
//     resultBox.textContent = count;
// }

// incrementBtn.addEventListener('click', increment);
// decrementBtn.addEventListener('click', decrement);
// resetBtn.addEventListener('click', resetIncrement);

// concatenation and template literal

// const fName = "Em";

// console.log("hello " + fName);
// console.log(`hello ${fName}`);

/**
 ternary operator
 condition ? true : false;
**/

// let printStatus;
// const age = 16;

// printStatus = (age >= 18) ? "Adult" : "Minor";

// console.log(printStatus);

// example 2

// greeting function

// let greetingBox = document.getElementById("greetingBox");
// let greetBtn = document.getElementById("greetBtn");
// let resetgreetBtn = document.getElementById("resetgreetBtn");

// function greetMeToday() {
//     let name = document.getElementById("name").value;
//     name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); //Capitalize name
//     let currentDate = new Date(); //today's date
//     let hourOfDay = currentDate.getHours(); //time right now
//     let minutes = currentDate.getMinutes(); // minutes right now
//     // let date = currentDate.toLocaleDateString(); //format the date as mm/dd/yyyy
//     let month = currentDate.toLocaleString('default', {month: 'long'}); //get the month name (August) -- use "short" (Aug)
//     let day = currentDate.getDate(); //today's date
//     let year = currentDate.getFullYear() //today's year
//     let greeting;
    
//     // 24 hours (hourofDay)
//     // 12 hours (hourIn12HrFormat)
//     let period = hourOfDay >= 12 ? 'PM' : 'AM';
//     let hourIn12HrFormat = hourOfDay % 12 || 12; //convert 0 hour to 12 for pm/am
    
//     if (hourOfDay >= 4 && hourOfDay < 12) {
//         greeting = `Good morning, ${name}! Today's date is ${month} ${day}, ${year} and the time is ${hourIn12HrFormat}:${minutes < 10 ? '0' + minutes : minutes}${period}.`;
//     } else if (hourOfDay >= 12 && hourOfDay <= 18) {
//         greeting = `Good afternoon, ${name}! Today's date is ${month} ${day}, ${year} and the time is ${hourIn12HrFormat}:${minutes < 10 ? '0' + minutes : minutes}${period}.`
//     } else {
//         greeting = `Good evening, ${name}! Today's date is ${month} ${day}, ${year} and the time is ${hourIn12HrFormat}:${minutes < 10 ? '0' + minutes : minutes}${period}.`;
//     }
    
//     greetingBox.textContent = `${greeting}`;
// }

// greetBtn.addEventListener('click', greetMeToday);

// function resetGreeting() {
//     let name = document.getElementById("name");
//     let greetingBox = document.getElementById("greetingBox");

//     name.value = "";
//     greetingBox.textContent = "";
// }

// resetgreetBtn.addEventListener('click', resetGreeting);


// conditions (if/else, switch, )


const showResult = document.getElementById("showResult");
const enterBtn = document.getElementById("enterBtn");
const resetBtn = document.getElementById("resetBtn");
// const age = 18;
// const inputAge = prompt("Enter your age: " );
// age = parseInt(inputAge);

// if else condition

// function age() {
//     const inputBox = parseInt(document.getElementById("inputBox").value);

//     if (inputBox >= 18) {
//         showResult.textContent = "Welcome, you can enter now.";
//     } else (
//         showResult.textContent = "Sorry, you're still a minor."
//     )
// }

//ternary condition

function age() {
    const inputBox = parseInt(document.getElementById("inputBox").value);

    inputBox >= 18 ? showResult.textContent = `Welcome, you can enter now. (${inputBox}).` : showResult.textContent = `Sorry, you're still a minor (${inputBox}).`

}

enterBtn.addEventListener('click', age);

function resetAge() {
    const inputBox = document.getElementById("inputBox");
    const showResult = document.getElementById("showResult");

    inputBox.value = "";
    showResult.textContent = "";
}
resetBtn.addEventListener('click', resetAge);



const correctAnswer = "Friday";

switch(correctAnswer) {
    case "Monday":
        console.log("Hello, Monday");
        break;

    case "Wednesday": 
        console.log("Hello, Wednesday");
        break;
    
    case "Friday":
        console.log("Correct! Friday!");
        break;

    default:
        console.log("day not found");
}




// loops

let i = 10;

while (i < 10) 
{
    i++;
    console.log(i);
}

console.log(i);
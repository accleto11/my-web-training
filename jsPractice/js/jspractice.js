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

// function age() {
//     const inputBox = parseInt(document.getElementById("inputBox").value);

//     inputBox >= 18 ? showResult.textContent = `Welcome, you can enter now. (${inputBox}).` : showResult.textContent = `Sorry, you're still a minor (${inputBox}).`

// }

// enterBtn.addEventListener('click', age);

// function resetAge() {
//     const inputBox = document.getElementById("inputBox");
//     const showResult = document.getElementById("showResult");

//     inputBox.value = "";
//     showResult.textContent = "";
// }
// resetBtn.addEventListener('click', resetAge);



// const correctAnswer = "Friday";

// switch(correctAnswer) {
//     case "Monday":
//         console.log("Hello, Monday");
//         break;

//     case "Wednesday": 
//         console.log("Hello, Wednesday");
//         break;
    
//     case "Friday":
//         console.log("Correct! Friday!");
//         break;

//     default:
//         console.log("day not found");
// }




// // loops

// let i = 10;

// while (i < 10) 
// {
//     i++;
//     console.log(i);
// }

// console.log(i);



const inputBoxLoop = document.getElementById('inputBoxLoop');
const enterBtnLoop = document.getElementById('enterBtnLoop');
const resetBtnLoop = document.getElementById('resetBtnLoop');
const showResultLoop = document.getElementById('showResultLoop');

// while loop

// function guessName() {
//     const guessName = "Kero";
//     let whileName = inputBoxLoop.value;

//     while (guessName !== whileName) {
//     showResultLoop.textContent = "Please try again!";
//     return; //to exit the function and avoid indifinite looping!
// };

//     //if the names match / user input the correct name;
//     showResultLoop.textContent = "Congratulations! You guessed it right!"; 
// };

// enterBtnLoop.addEventListener('click', guessName);

// // Reset functionality
// resetBtnLoop.addEventListener('click', () => {
//     inputBoxLoop.value = '';
//     showResultLoop.textContent = '';
// });

//guess random names

// const namesArray = ["Emem", "Kero", "John", "Naneng", "Jane"];

// //randomize the names
// let randomName = namesArray[Math.floor(Math.random() * namesArray.length)];

// function guessName() {
//     let userGuess = inputBoxLoop.value;

//     if (userGuess === randomName) {
//         showResultLoop.textContent = `Correct Anwer: ${randomName}. Congratulations! You guessed it right! `;
//     } else {
//         showResultLoop.textContent = "Please try again!";
//         console.log(randomName);
//     }
// };

// enterBtnLoop.addEventListener('click', guessName);

// // Reset functionality
// resetBtnLoop.addEventListener('click', () => {
//     inputBoxLoop.value = '';
//     showResultLoop.textContent = '';
//     randomName = namesArray[Math.floor(Math.random() * namesArray.length)]; // Pick a new random name
// });


//while loop (check the condition first before processing)

// let num = 0;

// while (num < 10) {
//     num++;
//     console.log(num);
// };

//1-10

// while (num < 10) {
//     console.log(num);
//     num++;
// };

// //0-9

// let num = 9;

// while (num < 10) {
//     console.log(num);
//     num++;
// };

/** num = 9
    log 9,
    9 + 1 = 10
    final log = 9
**/

//do while loop (process first before checking the condition)
//don't use when user needs to click button/ enter data in gui

// num = 10;

// do {
//     console.log(num);
//     num++;
// }
// while(num < 10);



//sorting algorithm

//bubble sort

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let swapped = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 swapped = true;
//             }
//         }
//         if (!swapped) break;
//     }
//     return arr;
// }

// Example usage
// console.log(bubbleSort([34, 85, 65, 12, 11, 20, 80]));
// console.log(bubbleSort([34, 12, 65, 12, 15]));

/**
[34, 85, 65, 12, 11, 20, 80]
[34, 65, 12, 11, 20, 80, 85] after pass 1
[34,12, 11, 20,65,80, 85] after pass 2
[12,11, 20,34, 65,80, 85] after pass 3
[11, 12, 20,34, 65,80, 85] after pass 4
[11, 12, 20,34, 65,80, 85] after pass 5
[11, 12, 20,34, 65,80, 85] after pass 6
 **/

//bubble sort?

const sortBubble = (arr) => {
    let arrlength = arr.length;

    for (let i = 0; i < arrlength; i++) {
        let swapped = false;
        for (let j = 0; j < arrlength - i -1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    } 
    return arr;
}

// console.log(sortBubble(["dog", "banana", "panda", "rabbit", "bird", "monkeys"]));

// console.log(sortBubble([34, 12, 65, 0, 15]));


const add = (num1, num2) => num1 + num2;

// console.log(add(3,7)/2);
// console.log(add(3,7)); 
//can be called multiple times

const average = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum/arr.length;
    return average;
}
    
console.log(average([2,4,4,6,4,8,2,10]));
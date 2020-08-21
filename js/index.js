'use strict';
const inputPlaceholders = document.querySelectorAll('#inputPlaceholder')
const Button = document.getElementById('clickMe');
const userInputs = document.querySelectorAll('#userInput');
let arrayinputPlaceholder = [];
let arrayuserInput = [];
let i = 0;
let j=0;

// console.log(arrayuserInput)

// Add values
Button.addEventListener('click', function (event) {
  event.preventDefault();
  userInputs.forEach(function(userInput){
    arrayuserInput.push(userInput.value)
    // arrayuserInput[j] = userInput.value;
    arrayinputPlaceholder.push(arrayuserInput[j])
    //arrayinputPlaceholder[j] = arrayuserInput[j]
    j++;
});
inputPlaceholders.forEach(function(inputPlaceholder){
    inputPlaceholder.innerHTML=arrayinputPlaceholder[i];
    inputPlaceholder.classList.add('filled');//adding css
    i++;
});

});


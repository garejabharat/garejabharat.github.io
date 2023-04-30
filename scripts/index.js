// function createPragraph() {
//   const para = document.createElement('p');
//   para.textContent = 'you clicked button';
//   document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll('button');
// for (const button of buttons) {
//   button.addEventListener('click', createPragraph);
// }

//************create random number game ******** */

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');

// const guessFeild = document.querySelector('#guessFeild');

// let guestCount = 1;
// let resetButton;

// function checkGuess() {
//   const userguest = Number(guessFeild.value);

//   if (guestCount === 1) {
//     guesses.textContent = 'previous guesses : ';
//   }
//   guesses.textContent += `${userguest} `;
//   guesses.style.backgroundColor = 'yellow';
//   guesses.style.fontSize = '200%';
//   guesses.style.padding = '10px';
//   guesses.style.boxShadow = '3px 3px 6px black';

//   if (userguest === randomNumber) {
//     lastResult.textContent = 'congratulation! you got is right';
//     lastResult.style.backgroundColor = 'green';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else if (guestCount === 10) {
//     lastResult.textContent = 'Game Over ';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else {
//     lastResult.textContent = 'Wrong';
//     lastResult.style.backgroundColor = 'red';
//     if (userguest < randomNumber) {
//       lowOrHi.textContent = 'Last guest is to low';
//     } else if (userguest > randomNumber) {
//       lowOrHi.textContent = 'Last guest is to High';
//     }
//   }
//   guestCount++;
//   guessFeild.value = '';
//   guessFeild.focus();
// }
// guessSubmit.addEventListener('click', checkGuess);

// function setGameOver() {
//   guessFeild.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement('button');
//   resetButton.textContent = 'Start The Game';
//   document.body.appendChild(resetButton);
//   resetButton.addEventListener('click', resetGame);
// }
// function resetGame() {
//   guestCount = 1;
//   const resetParas = document.querySelectorAll('.resultParas p');
//   for (const resetPara of resetParas) {
//     resetPara.textContent = '';
//   }
//   resetButton.parentNode.removeChild(resetButton);

//   guessFeild.disabled = false;
//   guessSubmit.disabled = false;
//   guesses.style.backgroundColor = 'yellow';
//   guesses.style.fontSize = '200%';
//   guesses.style.padding = '10px';
//   guesses.style.boxShadow = '3px 3px 6px black';
//   guessFeild.value = '';
//   guessFeild.focus();

//   lastResult.style.backgroundColor = 'white';

//   randomNumber = Math.floor(Math.random() * 100) + 1;
// }

// *****************function inside alert and textcontaint
// const buttonA = document.querySelector('#button_a');

// const headingA = document.querySelector('#heading_a');

// buttonA.onclick = () => {
//   console.log(buttonA);
//   alert(` hello ${prompt('Enter your name ? ')} nice to meet you`);
//   headingA.textContent = `welcome to ${prompt('Enter your name ? ')}`;
// };

// ************** let variable scope
// let number = 50;
// function print() {
//   let suquere = number + number;

//   if (number < 60) {
//     var latestnumber = 500;
//     let anothernumber = 10;
//     console.log(suquere);
//   }
//   console.log(latestnumber);
//   console.log(anothernumber);
// }
// print();

// ^^^^^^^^^^^^^^start and stop button usind js

// const machinebtn = document.querySelector('button');
// const msgshow = document.querySelector('p');
// machinebtn.addEventListener("click", start);
// console.log('stafghjk,');
// function start() {
//   if (machinebtn.textContent === 'Start Machine') {
//     machinebtn.textContent = 'stop Machine';
//     msgshow.textContent = 'The machine has started!';
//   } else {
//     machinebtn.textContent = 'Start Machine';
//     msgshow.textContent = 'The machine is stopped.';
//   }
// }

// const list = document.querySelector('.output ul');
// const totalBox = document.querySelector('.output p');
// let total = 0;
// // list.innerHTML = '';
// totalBox.textContent = '';
// let products = [
//   'Underpants:6.99',
//   'Socks:5.99',
//   'T-shirt:14.99',
//   'Trousers:31.99',
//   'Shoes:23.99',
// ];

// // number 2
// for (const product of products) {
//   const listitem = document.createElement('li');
//   listitem.textContent = product;
//   list.appendChild(listitem);
// }
// // number 3

// for (let product of products) {
//   const subArray = product.split(':');
//   const name = subArray[0];
//   let price = Number(subArray[1]);
//   total += price;

//   const itemtext = `${name} - $${price}`;
//   const listitem = document.createElement('li');
//   listitem.textContent = itemtext;
//   list.appendChild(listitem);
// }

// totalBox.textContent = 'Total: $' + total.toFixed(2);
// Add your code here
const section = document.querySelector('section');
const birds = ['Parrots', 'Falcons', 'Eagles', 'Emus', 'Caracaras', 'Egrets'];

// Add your code here
const Eagleindex = birds.indexOf('Eagles');
console.log(Eagleindex);

const removeEgle = birds.splice(Eagleindex, 1);
console.log(birds);
const checkLetter = birds.join(',');
for (let newlet of checkLetter) {
  const startletter = newlet.startsWith('E');
  console.log(startletter);
}
// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = '';

section.appendChild(para1);

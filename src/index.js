import './css/main.css'

const body = document.querySelector('body');
const textArea = document.createElement("textarea");

body.appendChild(textArea);
textArea.rows = '10';
textArea.cols = '100';

//body.innerHTML = keyBoardSymbols;
import './css/main.css';
import {keyBoardSymbols} from './keyBoardSymbols';


const body = document.querySelector('body');
const textArea = document.createElement("textarea");
body.appendChild(textArea);
textArea.rows = '10';
textArea.cols = '115';

const keyBoardWrapper = document.createElement("div");
body.appendChild(keyBoardWrapper);
keyBoardWrapper.className = 'wrapper';

(function showKeyBoardLine() {
    for(let j = 0; j < keyBoardSymbols.length; j++) {
        let divLine = document.createElement("div");
        keyBoardWrapper.appendChild(divLine);
        divLine.className = 'line';
        divLine.classList.add('line' + j);
    
        for(let i = 0; i < keyBoardSymbols[j].length; i++) {
            let item = document.createElement("div");
            divLine.appendChild(item);
            item.className = 'key';
            item.classList.add('key' + i);
        //    item.innerHTML = `${String.fromCharCode(keyBoardSymbols[j][i])}`;
            item.innerHTML = `${String(keyBoardSymbols[j][i])}`;
        }
    }
})();

keyBoardSymbols[4][3].className = 'space';

const key = document.querySelectorAll('.key')
const activeKey = (el) => {
    key.forEach(elem => elem.classList.remove('active'))
    el.target.classList.add('active');
}
key.forEach(el => el.addEventListener('click', activeKey));


//console.log(keyBoardSymbols[0][0]);
// let keyBoardSymbols = 'f';
// let list = '';
// for(let i = 0; i < keyBoardSymbols.length; i++){
//     list = `${list}, ${keyBoardSymbols[i].charCodeAt()}`
// }
// console.log(list);
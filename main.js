let city = 'Київ';
city = 'Львів';
let address = city;
console.log(address);
let num = prompt('Enter your number');
num % 2 ? console.log('Число непарне') : num == 0 ? console.log('Число 0') : console.log('Число парне');
function max(...arg) {
    if (arg.length < 2) {
        console.log(`Необхідно передати мінімум 2 параметри функції`);
    }
    else {
        console.log(Math.max(...arg));
    }
}
max(5, -2);
max(5, -2, 30, 6);
function sqrtNum(num) {
    if (!num && num != 0) {
        console.log(`Будь ласка, введіть число!`);
    }
    else if (num < 0) {
        console.log(`Введіть додатнє число.`);
    }
    else if (typeof num != "number") {
        console.log(`Повинно бути числове значення.`);
    }
    else {
        console.log(Math.sqrt(num));
    }
}
sqrtNum(0);
sqrtNum(2);
sqrtNum(`dd`);
sqrtNum(-5);
sqrtNum();
const getClass = className => document.querySelector(className);
const badContent = [];
const re = /\w/g;
getClass(`.add-button`).addEventListener('click', function () {
    if (getClass('.input-text').value.trim()) {
        badContent.push(getClass('.input-text').value.trim());
        getClass('.input-text').value = ``;
        getClass('.bad-words-main').textContent = badContent;
        getClass('.input-text').placeholder = `word here..`;
    }
    else {
        getClass('.input-text').placeholder = `Please write a word!`;
    }
});
getClass(`.reset-button`).addEventListener('click', function () {
    badContent.length = 0;
    getClass('.bad-words-main').textContent = badContent;
});
getClass(`.cenzor-button`).addEventListener(`click`, function () {
    if (getClass(`.input-text-cenzor`).value.length > 0) {
        const textCenzor = getClass(`.input-text-cenzor`).value.split(" ");
        getClass(`.input-text-cenzor`).value = textCenzor.map(elem => badContent.includes(elem) ? elem.replace(re, '*') : elem).join(' ');
        getClass('.input-text-cenzor').placeholder = `text here..`;
    }
    else {
        getClass('.input-text-cenzor').placeholder = `Please write a text!`;
    }
});

'use strict';

let section1 = document.querySelector('.modalWindow');
console.log(section1);
let buttonOpen = document.createElement('button');
buttonOpen.innerText = 'Открыть';
buttonOpen.setAttribute('class', 'button_style')
section1.append(buttonOpen);
buttonOpen.setAttribute('onclick', 'openModalWindow()');
function openModalWindow() {
    windowBackground.style.display = 'block';
};



let windowBackground = document.createElement('div');
windowBackground.setAttribute('class', 'div_background');
section1.append(windowBackground);


let windowModal = document.createElement('div');
windowModal.innerText = `Физические лица могут обменивать валюту онлайн на сумму до 150 тысяч грн в день. Продажа валюты онлайн будет осуществляться по текущему коммерческому курсу банка без дополнительных комиссий.\n\n Если Вы ознакомились с информацией нажмите кнопку 'Закрыть'.`;
windowModal.setAttribute('class', 'div_modalWindov');
windowBackground.append(windowModal);
windowModal.setAttribute('onclick', 'closeModal()');
function closeModal() {
    windowBackground.style.display = 'none';
};



let windowButton = document.createElement('button');
windowButton.setAttribute('class', 'div_button');
windowModal.append(windowButton);
windowButton.innerText = 'Закрыть';
windowButton.setAttribute('onclick', 'closeModal()');
function closeModal() {
    windowBackground.style.display = 'none';
};




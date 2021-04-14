'use strict';


function costEur() {
    let section = document.querySelector('.currencyExchange');
    let amountHryvniaEur = prompt('Укажите на какую сумму в гривнах Вы хотите приобрести валюту', '')
    if (amountHryvniaEur <= 0 || isNaN(amountHryvniaEur)) {
        alert('Ошибка ввода данных!!! Повторите операцию...');
    }
    else if (amountHryvniaEur > 150000) {
        alert('Ошибка!!! Операцию не возможно провести согластно действующего законодательства Украины. \n \n *с  информацией о причине отказа можно ознакомится ниже...');
    }
    else {
        let rateEur = eur.getAttribute('data-rate');
        let amountEur = amountHryvniaEur / rateEur;
        let textInfoEur = document.createElement('p');
        textInfoEur.style.color = 'blue';
        textInfoEur.textContent = `За ${amountHryvniaEur} гривень Вы можете купить ${amountEur.toFixed(2)} EUR`;
        section.appendChild(textInfoEur);
    };
}


let clickBtnPrint = document.querySelector('#eur');
clickBtnPrint.addEventListener('click', costEur);



function costUsd() {
    let section = document.querySelector('.currencyExchange');
    let amountHryvniaUsd = prompt('Укажите на какую сумму в гривнах Вы хотите приобрести валюту', '')
    if (amountHryvniaUsd <= 0 || isNaN(amountHryvniaUsd)) {
        alert('Ошибка ввода данных!!! Повторите операцию...');
    }
    else if (amountHryvniaUsd > 150000) {
        alert('Ошибка!!! Операцию не возможно провести согластно действующего законодательства Украины. \n \n *с  информацией о причине отказа можно ознакомится ниже...');
    }
    else {
        let rateUsd = usd.getAttribute('data-rate');
        let amountUsd = amountHryvniaUsd / rateUsd;
        let textInfoUsd = document.createElement('p');
        textInfoUsd.style.color = 'yellow';
        textInfoUsd.textContent = `За ${amountHryvniaUsd} гривень Вы можете купить ${amountUsd.toFixed(2)} USD`;
        section.appendChild(textInfoUsd);
    };
}



let clickBtnUsd = document.querySelector('#usd');
clickBtnUsd.addEventListener('click', costUsd);


function costPlz() {
    let section = document.querySelector('.currencyExchange');
    let amountHryvniaPlz = prompt('Укажите на какую сумму в гривнах Вы хотите приобрести валюту', '')
    if (amountHryvniaPlz <= 0 || isNaN(amountHryvniaPlz)) {
        alert('Ошибка ввода данных!!! Повторите операцию...');
    }
    else if (amountHryvniaPlz > 150000) {
        alert('Ошибка!!! Операцию не возможно провести согластно действующего законодательства Украины. \n \n *с  информацией о причине отказа можно ознакомится ниже...');
    }
    else {
        let ratePlz = plz.getAttribute('data-rate');
        let amountPlz = amountHryvniaPlz / ratePlz;
        let textInfoPlz = document.createElement('p');
        textInfoPlz.style.color = 'red';
        textInfoPlz.textContent = `За ${amountHryvniaPlz} гривень Вы можете купить ${amountPlz.toFixed(2)} PLZ`;
        section.appendChild(textInfoPlz);
    }
};


let clickBtnPlz = document.querySelector('#plz');
clickBtnPlz.addEventListener('click', costPlz);




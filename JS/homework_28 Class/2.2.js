'use strict';



let String = 'Японська компанія Hitachi Zosen представила новий твердотільний акумулятор, пише Nikkei Asia. Повідомляється, що він володіє рекордною ємністю 1000 міліампер-годин, що в сім разів більше, ніж у попереднього такого джерела живлення цієї компанії. Головною перевагою твердотільних акумуляторів є їх можливість працювати в широкому температурному діапазоні. Так, нова модель зберігає повну працездатність при температурах від -40 до +100 градусів за Цельсієм. І якщо перше важливо взимку, то друге означає, що такі акумулятори не бояться перегріву і значить допускають надшвидку зарядку електричною енергією високої потужності. Щоб випробувати акумулятор, виробник домовився з Японським космічним агентством про відправку його на Міжнародну космічну станцію, де він послужить джерелом живлення для розташованої зовні камери.Ємність в 1000 міліампер-годин хоча і є рекордною, але поки не можна порівняти з ємністю літій-іонних акумуляторів, що використовуються в електромобілях. Так, у елемента 2170 в Tesla Model 3 цей показник становить 5000, а в нових акумуляторах 4680 він буде істотно більше. Великі призматичні акумулятори, наприклад такі як Ultium від нових електромобілів GM, мають в сотні разів більшу ємність. При цьому напруга твердотільного елемента живлення Hitachi Zosen 3,65 вольт, що майже не відрізняється від стандартного напруги літій-іонних акумуляторів. Іншими словами, п’ять нових елементів могли б замінити один елемент від Tesla Model.. Батареї з твердотільних акумуляторів є давньою мрією багатьох автовиробників.';


// Реализовать класс, описывающий простой маркер + метод для печати

class MarkerPrint {
    constructor(color, inkPercent) {
        this.color = color;
        this.inkPercent = inkPercent;

    };
    stringCreate() {
        let paragraph = document.createElement('p');
        paragraph.style.color = this.color;
        let space = ' ';
        let array = String.split(space);
        let arrayNew = array.slice(0, `${this.inkPercent * 2}`);
        let StringNew = arrayNew.join(' ');
        paragraph.textContent = `${StringNew}-------  Ошибка!!!! Закончились чернила...`;
        document.body.appendChild(paragraph);
    };
}


function print() {
    let color = prompt('Выбеите цвет которым Вы хотите распечатать данный текст: red, green или blue', '')
    let inkPercent = +prompt('Как Вы думаете на сколько процентов заправлен маркер чернилами (укажите число от 1 до 100)', '')
    alert('Если для распечатывания текста будет не достаточно чернил:\n1) Будет выведена ошибка; \n2) Печать текса будет остановлена.');

    if ((color === 'red' || color === 'blue' || color === 'green') && inkPercent > 0) {

        if (color === 'red') {
            let markerRed = new MarkerPrint('red', inkPercent);
            markerRed.stringCreate();
        }

        else if (color === 'blue') {
            let markerBlue = new MarkerPrint('blue', inkPercent);
            markerBlue.stringCreate();
        }

        else {
            let markerGreen = new MarkerPrint('green', inkPercent);
            markerGreen.stringCreate();
        };


    } else {
        alert('К сожелению данного цвета нет в наличии или мы не можем определить каким цветом Вы хотите распечатать текст. Повторите пожалуйста выбор!!!...');
    };
}



let clickBtnPrint = document.querySelector('#name-btn');
clickBtnPrint.addEventListener('click', print);





// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

class MarkerRefuel extends MarkerPrint {
    constructor(color, inkPercent, opacity) {
        super(color, inkPercent);
        this.opacity = opacity;
    };
    stepOne() {
        let paragraphFirst = document.createElement('p');
        let paragraphFirstError = document.createElement('p');
        paragraphFirst.style.color = this.color;
        paragraphFirst.style.opacity = 0.33;
        let spaceFirst = ' ';
        let textFirst = '---------  Уровень заправки маркера чернилами 33%! Идет процес дозаправки, ожидайте пожалуйста....  -------------';
        let arrayFirst = String.split(spaceFirst);
        let arrayFirstNew = arrayFirst.slice(0, 66);
        let StringFirst = arrayFirstNew.join(' ');
        paragraphFirst.textContent = `${StringFirst}`;
        paragraphFirstError.textContent = `${textFirst}`;
        setTimeout(function () {
            document.body.appendChild(paragraphFirst);
            document.body.appendChild(paragraphFirstError);
        }, 1000);
    };
    stepTwo() {
        let paragraphSecond = document.createElement('p');
        let paragraphSecondError = document.createElement('p');
        paragraphSecond.style.color = this.color;
        paragraphSecond.style.opacity = 0.67;
        let spaceSecond = ' ';
        let textSecond = '---------  Уровень заправки маркера чернилами 66%!  Идет процес дозаправки, ожидайте пожалуйста....  -------------';
        let arraySecond = String.split(spaceSecond);
        let arraySecondNew = arraySecond.slice(0, 133);
        let StringSecond = arraySecondNew.join(' ');
        paragraphSecond.textContent = `${StringSecond}`;
        paragraphSecondError.textContent = `${textSecond}`;
        setTimeout(function () {
            document.body.appendChild(paragraphSecond);
            document.body.appendChild(paragraphSecondError);
        }, 5000);
    };
    stepThree() {
        let paragraphThird = document.createElement('p');
        let paragraphThirdError = document.createElement('p');
        paragraphThird.style.color = this.color;
        paragraphThird.style.opacity = 1;
        let spaceThird = ' ';
        let textThird = '---------  Уровень заправки маркера чернилами 100%! Текст распечатн полностью  -------------';
        let arrayThird = String.split(spaceThird);
        let arrayThirdNew = arrayThird.slice(0, Infinity);
        let stringThird = arrayThirdNew.join(' ');
        paragraphThird.textContent = `${stringThird}`;
        paragraphThirdError.textContent = `${textThird}`;
        setTimeout(function () {
            document.body.appendChild(paragraphThird);
            document.body.appendChild(paragraphThirdError);
        }, 10000);
    };
    documentCreate() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    }
}



function refill() {
    let color = prompt('Укажите цвет которым Вы желаете  заправить маркер (к примеру: aquamarine, yellow, red, brown ...) \n\nПOЖАЛУЙСТА БУДЬТЕ ВНИМАТЕЛЬНЫ!!!\n\nЕсли Вы укажиет не корректно цвет - автоматически начнется заправка маркера чернилами черного цвета!!!', '')
    alert('Процес автоматической заправки начат. Текст будт распечатан заново с самого начала по мере заправки маркера')
    let markerRed = new MarkerRefuel(color, this.inkPercent, this.opacity);
    markerRed.documentCreate();
}



let clickBtn = document.querySelector('#name1-btn');
clickBtn.addEventListener('click', refill);

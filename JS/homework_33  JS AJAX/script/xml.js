'use strict';



const btn_request = document.querySelector('#btn_rqst');

const request = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const xml = new XMLHttpRequest();


btn_request.onclick = function () {
    xml.open('GET', request);
    xml.responseType = 'json';
    xml.onload = () => {
        let courses = xml.response;
        let c = courses.sort((a, b) => {
            return a.rate - b.rate
        });



        let coursesNew = c.filter(function (course) {
            return (course.rate > 20 && course.rate < 30);

        });



        let result = '';
        for (let i in coursesNew) {
            result += `\r \n  ${coursesNew[i].txt} ( ${coursesNew[i].cc} ) -  курс: ${coursesNew[i].rate.toFixed(2)}, `;
        };


        let banner = document.querySelector('.banner');
        btn_request.style.display = 'none';
        banner.setAttribute('class', 'banner_style')
        let textInfo = document.createElement('p');
        textInfo.textContent = `${result}`;
        banner.appendChild(textInfo);

    }
    xml.send();
}










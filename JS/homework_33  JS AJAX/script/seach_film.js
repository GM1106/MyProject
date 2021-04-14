const URL = 'https://www.omdbapi.com/?apikey='
const KEY = 'a8a0fd28'
btn = document.getElementById('subm')
result = document.getElementById('results')
let d
let storage = []
let start = 1

document.addEventListener('submit', function (e) {
    e.preventDefault();
    getFilm()
})

function getFilm(page = 1) {
    search = filmName.value
    type = typeMowie.value
    let req = `${URL}${KEY}&s=${search}&type=${type}&page=${page}`
    console.log(req);
    fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.Error) {
                result.innerHTML = ''
                details.innerHTML = 'Movie not found!'
            } else {
                writeResults(data, page);
            }
        })
}

function getInnet(storage, e, i, inner, details) {
    inner += `<div class="result">
    <a href="${e.Poster}"><img src="${e.Poster}"></a>
    <span>${e.Title}</span>
    <button class="btn-details" onclick="writeDetails(${i}, ${storage}, ${details})">Details</button>
    </div>`
    return inner
}

function writeResults(data, page) {
    if (data.Search.length > 0) {
        d = data
        let inner = ''
        data.Search.forEach((e, i) => {
            inner = getInnet('d.Search', e, i, inner, 'details')
        });
        len = Math.floor(Number(data.totalResults) / 10)
        if (len * 10 > 10) {
            let pagin = ''
            for (let i = 1; i < len && i < 10; i++) {
                if (i == page) {
                    pagin += `<button class="btn--active" onclick="getFilm(${i})">${i}</button>`
                } else {
                    pagin += `<button onclick="getFilm(${i})">${i}</button>`
                }
            }
            if (len > 9) {
                pagin += `<input onkeydown="eventer(event, this)" type="number" placeholder="${page}" max="${len}" id="pageN">`;
                if (len == page) {
                    pagin += `<button  class="btn--active" onclick="getFilm(${len})">${len}</button>`;
                } else {
                    pagin += `<button onclick="getFilm(${len})">${len}</button>`;
                }
            }
            inner += pagin
        }
        result.innerHTML = inner
    } else {
        result.innerHTML = ''
        details.innerHTML = 'Movie not found!'
    }
}

function writeDetails(s, d, details) {
    b = ''
    let imdb = d[s].imdbID
    b += `<h3>Title: ${d[s].Title} </h3>`
    b += `<div><i>Type: ${d[s].Type}</i></div>`
    b += `<div><b>Year: ${d[s].Year}</b></div>`
    b += `<div><b>Plot: ${d[s].Plot}</b></div>`
    b += `<div>imdbID: ${imdb}</div>`
    details.innerHTML = b
}

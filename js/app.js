const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;


const loadTemperature = city => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

loadTemperature('Patuakhali');

const displayTemp = data => {
    const cityName = document.getElementById('cityName');
    const temp = document.getElementById('temperature');
    temp.innerText = data.main.temp;

    cityName.innerText = data.name;

}

document.getElementById('btn-search').addEventListener('click', function() {
    const searchField = document.getElementById('search-field');
    const searchCity = searchField.value;
    loadTemperature(searchCity);
});
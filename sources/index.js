function updateTime () {
let parisTimeZone = document.querySelector ("#paris");
if (parisTimeZone){
let parisDateSection = parisTimeZone.querySelector(".date");
let parisTimeSection = parisTimeZone.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
 parisDateSection.innerHTML = parisTime.format("MMMM Do, YYYY"); parisTimeSection.innerHTML = parisTime.format("hh:mm:ss [<small>]A[</small>]");
}

let tokyoTimeZone = document.querySelector ("#tokyo");
if (tokyoTimeZone){
let tokyoDateSection = tokyoTimeZone.querySelector(".date");
let tokyoTimeSection = tokyoTimeZone.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");
 tokyoDateSection.innerHTML = tokyoTime.format("MMMM Do, YYYY"); tokyoTimeSection.innerHTML = tokyoTime.format("hh:mm:ss [<small>]A[</small>]");
}

let romeTimeZone = document.querySelector ("#rome");
if (romeTimeZone){
let romeDateSection = romeTimeZone.querySelector(".date");
let romeTimeSection = romeTimeZone.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");
 romeDateSection.innerHTML = romeTime.format("MMMM Do, YYYY"); romeTimeSection.innerHTML = romeTime.format("hh:mm:ss [<small>]A[</small>]");
}
};

function  updateCity (event) {
let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
}
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector(".city-display");
citiesElement.innerHTML = `<div class="city">
    <div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
</div>
<div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>
<a class="all-cities" href="index.html">Return to all cities</a>`;

setInterval (1000);
}

updateTime ();
setInterval (updateTime, 1000);


let selectCities = document.querySelector("#cities");
selectCities.addEventListener("change", updateCity);
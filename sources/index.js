//function updateTime () {

//let dallasTimeZone = document.querySelector ("#dallas");
//let dallasDateSection = dallasTimeZone.querySelector(".date");
//let dallasTimeSection = dallasTimeZone.querySelector(".time");
//let dallasTime = moment().tz("America/Matamoros");

//dallasDateSection.innerHTML = dallasTime.format("MMMM Do, YYYY");
//dallasTimeSection.innerHTML = dallasTime.format("hh:mm:ss [<small>]A[</small>]");

//let londonTimeZone = document.querySelector ("#london");
//let londonDateSection = londonTimeZone.querySelector(".date");
//let londonTimeSection = londonTimeZone.querySelector(".time");
//let londonTime = moment().tz("Europe/London");

//londonDateSection.innerHTML = londonTime.format("MMMM Do, YYYY");
//londonTimeSection.innerHTML = londonTime.format("hh:mm:ss [<small>]A[</small>]");
//};

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
</div>`;

}

//updateTime ();
//setInterval (updateTime, 1000);

let selectCities = document.querySelector("#cities");
selectCities.addEventListener("change", updateCity);
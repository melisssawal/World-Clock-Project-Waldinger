function updateTime () {

let dallasTimeZone = document.querySelector ("#dallas");
let dallasDateSection = dallasTimeZone.querySelector(".date");
let dallasTimeSection = dallasTimeZone.querySelector(".time");
let dallasTime = moment().tz("America/Matamoros");

dallasDateSection.innerHTML = dallasTime.format("MMMM Do, YYYY");
dallasTimeSection.innerHTML = dallasTime.format("hh:mm:ss [<small>]A[</small>]");

let londonTimeZone = document.querySelector ("#london");
let londonDateSection = londonTimeZone.querySelector(".date");
let londonTimeSection = londonTimeZone.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateSection.innerHTML = londonTime.format("MMMM Do, YYYY");
londonTimeSection.innerHTML = londonTime.format("hh:mm:ss [<small>]A[</small>]");
};

updateTime ();
setInterval (updateTime, 1000);
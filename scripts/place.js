const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 5;
const windSpeed = 20;

document.querySelector("#temperature").textContent = `${temperature} °C`;
document.querySelector("#conditions").textContent = "Sunny";
document.querySelector("#wind").textContent = `${windSpeed} km/h`;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#windchill").textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    document.querySelector("#windchill").textContent = "n/a";
}
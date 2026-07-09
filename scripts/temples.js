const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

button.addEventListener("click", function () {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        button.textContent = "☰";
    }
    else {
        button.textContent = "☰";
    }
});

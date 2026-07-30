const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Pedro Sula",
        location: "San Pedro Sula, Honduras",
        dedicated: "2024, October, 13",
        area: 35818,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/Usqhjku9xyRSHqRwNaqaXs8ONHRjxnruvehdhtcp/full/1280%2C/0/default"
    },
    {
        templeName: "Tokio Japan",
        location: "Tokio, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        templeName: "Nairobi Kenia",
        location: "Nairobi, Kenia",
        dedicated: "2025, May, 18",
        area: 19870,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/xbrnlkgvoumomut7itk86rrpepzrej7pax1mvuzz/full/1280%2C/0/default"
    },
];


const container = document.querySelector("#gallery");

function displayTemples(temples) {
    container.innerHTML = "";
    
    temples.forEach(temple => {

        const card = document.createElement("section");
        const name = document.createElement("h2")
        const location = document.createElement("p")
        const dedicated = document.createElement("p")
        const area = document.createElement("p")
        const image = document.createElement("img")

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Area:</strong> ${temple.area}`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    })
}

displayTemples(temples)

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
    );
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple => temple.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple => temple.area < 10000)
    );
});

const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

button.addEventListener("click", function () {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        button.textContent = "X";
    }
    else {
        button.textContent = "☰";
    }
});

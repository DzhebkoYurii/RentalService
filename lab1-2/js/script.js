const availableApartments = [
    { id: 1, title: "Green Valley", address: "вул. Довженка, 10", rooms: 2, price: 1100, img: "img/ap1.jpg", lat: 49.8397, lng: 24.0297 },
    { id: 2, title: "Sunset Apartments", address: "вул. Шевченка, 22", rooms: 3, price: 1450, img: "img/ap1.jpg", lat: 49.8420, lng: 24.0265 },
    { id: 3, title: "City View", address: "вул. Грушевського, 5", rooms: 1, price: 950, img: "img/ap1.jpg", lat: 49.8438, lng: 24.0306 },
    { id: 4, title: "Skyline Residences", address: "вул. Коперника, 18", rooms: 2, price: 1300, img: "img/ap1.jpg", lat: 49.8412, lng: 24.0350 },
    { id: 5, title: "Lakeside House", address: "вул. Озерна, 8", rooms: 4, price: 1800, img: "img/ap1.jpg", lat: 49.8450, lng: 24.0282 },
    { id: 6, title: "Central Plaza", address: "пл. Ринок, 1", rooms: 3, price: 2000, img: "img/ap1.jpg", lat: 49.8390, lng: 24.0315 },
    { id: 7, title: "Cozy Nest", address: "вул. Липова, 12", rooms: 1, price: 800, img: "img/ap1.jpg", lat: 49.8375, lng: 24.0270 },
    { id: 8, title: "The Grand", address: "вул. Січових Стрільців, 3", rooms: 5, price: 2500, img: "img/ap1.jpg", lat: 49.8405, lng: 24.0333 },
    { id: 9, title: "Harmony Homes", address: "вул. Замкова, 14", rooms: 2, price: 1200, img: "img/ap1.jpg", lat: 49.8382, lng: 24.0320 },
    { id: 10, title: "Quiet Retreat", address: "вул. Вернадського, 9", rooms: 3, price: 1350, img: "img/ap1.jpg", lat: 49.8465, lng: 24.0290 }
];

const bookedApartments = [
    { id: 1, title: "Comfort Park", address: "вул. Франка, 15", rooms: 3, price: 1200, img: "img/ap1.jpg", startDate: "30.03.2024", endDate: "12.04.2024" },
    { id: 2, title: "Comfort Park", address: "вул. Франка, 15", rooms: 3, price: 1500, img: "img/ap1.jpg", startDate: "21.10.2024", endDate: "22.10.2024" },
    { id: 3, title: "Comfort Park", address: "вул. Франка, 15", rooms: 3, price: 1000, img: "img/ap1.jpg", startDate: "20.03.2025", endDate: "..." },
]
var listElm = document.querySelector('.apartments__body');
var listMyElm = document.querySelector('.bookings__body');
let listElmPTR = 0;

function addCards(startPoint) {
    let index = startPoint;

    do {
        const apt = availableApartments[listElmPTR];

        if (!apt) break; 

        const card = document.createElement("div");
        card.classList.add("apartmens__card", "card");
        card.innerHTML = `
            <img class="card__img" src="${apt.img}" alt="Квартира ${apt.id}">
            <h3>${apt.title}</h3>
            <p>Адреса: ${apt.address}</p>
            <p>Кількість кімнат: ${apt.rooms}</p>
            <p>Ціна за ніч: ${apt.price} грн</p>
            <button class="card__btn card__btn-offer" data-id="${apt.id}">Забронювати</button>
        `;

        const button = card.querySelector(".card__btn-offer");
        button.addEventListener("click", () => bookApartment(apt.id));

        listElm.appendChild(card);
        listElmPTR++;
    } while (listElmPTR < availableApartments.length && listElmPTR < index + 6);

    if (listElmPTR >= availableApartments.length){
        document.querySelector('.apartments__toggleButton').classList.add("button-hide");
    }
}

function bookApartment(apartmentId) {
    const index = availableApartments.findIndex(apt => apt.id === apartmentId);
    if (index === -1) return; 

    const apt = availableApartments.splice(index, 1)[0]; 
    apt.startDate = new Date().toLocaleDateString();
    apt.endDate = "...";
    bookedApartments.push(apt); 

    renderLists();
}

function renderLists() {
    listElm.innerHTML = "";
    listElmPTR = 0;
    addCards(0);

    listMyElm.innerHTML = "";
    bookedCards();
}

function bookedCards() {
    listMyElm.innerHTML = "";

    bookedApartments.forEach(apt => {
        listMyElm.insertAdjacentHTML("beforeend", 
            `<div class="bookings__card card">
                <img class="card__img" src="${apt.img}" alt="Квартира ${apt.id}">
                <h3>${apt.title}</h3>
                <p>Адреса: ${apt.address}</p>
                <p>Кількість кімнат: ${apt.rooms}</p>
                <p>Ціна за ніч: ${apt.price} грн</p>
                <button class="card__btn card__btn-expired">${apt.startDate} - ${apt.endDate}</button>
            </div>`);
    });
}

addCards(0);
bookedCards();

document.querySelector('.apartments__toggleButton').addEventListener('click', () => {
    addCards(listElmPTR);
});


document.querySelector('.apartments__toggleButton').addEventListener('click', () => {
    addCards(listElmPTR);
});



const map = L.map('map').setView([49.8397, 24.0297], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

availableApartments.forEach(apt => {
    const marker = L.marker([apt.lat, apt.lng]).addTo(map);
    
    marker.bindPopup(`
        <b>${apt.title}</b><br>
        Адреса: ${apt.address}<br>
        Кімнат: ${apt.rooms}<br>
        Ціна: ${apt.price} грн<br>
        <img src="${apt.img}" width="100">
    `);
});
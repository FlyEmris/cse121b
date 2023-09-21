/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Jonathan Leonardson';
let currentYear = '2023';
let profilePicture = 'images/FB_IMG_1600378235339 (2).jpg';
/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img')

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}<strong>`;
textContent = 'currentYear';
imageElement.setAttribute('src' , profilePicture);
imageElement.setAttribute


/* Step 5 - Array */

let favoriteFood = [
    "Pizza",
    "Popcorn",
    "Macaroni and Cheese",
    "Goldfish",
    "Cookies and Cream Milkshakes"
];

foodElement.innerHTML += `<br>${favoriteFood}`;

let singleFavoriteFood = "oreo";
favoriteFood.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;
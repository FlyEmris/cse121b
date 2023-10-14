/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Jonathan Leonardson",
    photo: "images/FB_IMG_1600378235339 (2).jpg",
    favoriteFoods: ['Fried Chicken', 'oreo', 'pudding', 'mashed potatoes', 'turkey'],
    hobbies: ['snowboarding', 'listening to music', 'hiking', 'Bird Hunting'],
    placesLived: [],
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:'Dillon, Mt',
        length: '16 years'},
    {    
        place:'Florida',
        length: '2 years'},

    {    place: 'Bozeman, Mt',
        length: '2 years'},

    {    place: 'Provo, Ut',
        length: '2 months'},
        
    {    place: 'Rexburg, Id',
        length: '4 years'},
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo
document.querySelector('#name').alt = myProfile.photo

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.innerHTML = place.place;
    document.querySelector('#places-lived').appendChild(dt);
});
myProfile.placesLived.forEach(length => {
    let dd = document.createElement('dd');
    dd.innerHTML = length.length;
    document.querySelector('#places-lived').appendChild(dd);
});

// let dt = document.createElement('dt');
// dt.innerHTML = myProfile.placesLived[0].place;
// document.querySelector('#places-lived').appendChild(dt);
// let dd = document.createElement('dd');
// dd.innerHTML = myProfile.placesLived[0].length;
// document.querySelector('#places-lived').appendChild(dd);



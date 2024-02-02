/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Momoh Destiny",
    profile: 'images/pic.jpg',
    favoriteFoods: ['Rice', 'Beans', 'Pasta', 'Chicken pie'],
    hobbies: ["Meditating", "Watch Wreastling","VideoGames","Coding"],
    placesLived: []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Edo State, Nigeria",
        length: "8 Years"
    },
    {
        place: "Ogun State, Abeokuta, NIgeria", 
        length: "4 Years"
    },
    {
        place: "Ibadan, Oyo State, Nigeria",
        length:  "8 Years"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.profile;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
let dl = document.createElement("dl");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    dl.appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dl.appendChild(dd);
});
document.querySelector("#places-lived").appendChild(dl);



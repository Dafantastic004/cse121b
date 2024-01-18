/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName='Momoh Destiny';
let currentYear='2024';
let ProfilePic='images/pic.png';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img')




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', ProfilePic);
imageElement.setAttribute('alt',`profile image of ${fullName}`);







/* Step 5 - Array */
const favouriteFoods = ['Rice', 'Beans', 'Semo', 'yam', 'Dodo', 'Spag']
foodElement.innerHTML=favouriteFoods
const favFood = ['Banana']
favouriteFoods.push(favFood);
foodElement.innerHTML += `<br>${favouriteFoods}`;
favouriteFoods.shift(favFood);
foodElement.innerHTML += `<br>${favouriteFoods}`;
favFood.pop();
foodElement.innerHTML += `<br>${favouriteFoods}`;


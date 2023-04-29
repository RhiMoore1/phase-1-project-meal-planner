console.log('main.js is working')


fetch("http://localhost:3000/FoodChoices")
.then(res => res.json())
.then(json => console.log(json))
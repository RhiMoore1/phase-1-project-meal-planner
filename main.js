console.log('main.js is working')


fetch("http://localhost:3000/FoodChoices")
.then(res => res.json())
.then(foodChoices => {
    const proteinChoicesDiv = document.querySelector("#proteinChoicesDiv");
    const carbChoicesDiv = document.querySelector("#carbChoicesDiv");
    const veggieChoicesDiv = document.querySelector("#veggieChoicesDiv");
    const fruitChoicesDiv = document.querySelector("#fruitChoicesDiv");
    const dessertChoicesDiv = document.querySelector("#dessertChoicesDiv");

    
    foodChoices.forEach(mainFoodType => {
        function foodChoiceDivGenerator(parentDiv, foodType) {
            let foodChoice = document.createElement('p');
            foodChoice.textContent = mainFoodType.title;
            parentDiv.appendChild(foodChoice);
            let foodRadioButton = document.createElement('input');
            foodRadioButton.setAttribute("type", "radio");
            foodRadioButton.name = foodType;
            foodRadioButton.value = mainFoodType.title;
            foodChoice.appendChild(foodRadioButton);
        }
        if (mainFoodType.type === "PROTEIN") {
            foodChoiceDivGenerator(proteinChoicesDiv, 'protein')
        } else if(mainFoodType.type === "CARB") {
            foodChoiceDivGenerator(carbChoicesDiv, 'carb')
        } else if(mainFoodType.type === "VEGGIE") {
            foodChoiceDivGenerator(veggieChoicesDiv, 'veggie')
        } else if(mainFoodType.type === "FRUIT") {
            foodChoiceDivGenerator(fruitChoicesDiv, 'fruit')
        } else if(mainFoodType.type === "DESSERT") {
            foodChoiceDivGenerator(dessertChoicesDiv, 'dessert')
        }
    })
})


const form = document.querySelector("form");
let selectedRadioButtonsArray = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();

   const formData = Object.fromEntries(new FormData(e.target));
   console.log(formData);

    const textArea = document.getElementById('textAreaFoodArray');
    if (textArea.innerHTML === '') {
        textArea.textContent = Object.values(formData).join('\n');
    }  
})












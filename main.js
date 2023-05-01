console.log('main.js is working')


fetch("http://localhost:3000/FoodChoices")
.then(res => res.json())
.then(foodChoices => {
    const proteinChoicesDiv = document.querySelector("#proteinChoicesDiv");
    const carbChoicesDiv = document.querySelector("#carbChoicesDiv");
    const veggieChoicesDiv = document.querySelector("#veggieChoicesDiv");
    const fruitChoicesDiv = document.querySelector("#fruitChoicesDiv");
    const dessertChoicesDiv = document.querySelector("#dessertChoicesDiv");

    
    foodChoices.forEach(foodChoice => {
        if (foodChoice.type === "PROTEIN") {
            let proteinChoice = document.createElement('p');
            proteinChoice.textContent = foodChoice.title;
            proteinChoicesDiv.appendChild(proteinChoice);
            let proteinRadioButton = document.createElement('input');
            proteinRadioButton.setAttribute("type", "radio");
            proteinRadioButton.name = "protein";
            proteinRadioButton.value = foodChoice.title;
            proteinChoice.appendChild(proteinRadioButton);
        } else if(foodChoice.type === "CARB") {
            let carbChoice = document.createElement('p');
            carbChoice.textContent = foodChoice.title;
            carbChoicesDiv.appendChild(carbChoice);
            let carbRadioButton = document.createElement('input');
            carbRadioButton.setAttribute("type", "radio");
            carbRadioButton.name = "carb";
            carbRadioButton.value = foodChoice.title;
            carbChoice.appendChild(carbRadioButton);
        }   else if(foodChoice.type === "VEGGIE") {
            let veggieChoice = document.createElement('p');
            veggieChoice.textContent = foodChoice.title;
            veggieChoicesDiv.appendChild(veggieChoice);
            let veggieRadioButton = document.createElement('input');
            veggieRadioButton.setAttribute("type", "radio");
            veggieRadioButton.name = "veggie"
            veggieChoice.appendChild(veggieRadioButton);
            veggieRadioButton.value = foodChoice.title;
        }   else if(foodChoice.type === "FRUIT") {
            let fruitChoice = document.createElement('p');
            fruitChoice.textContent = foodChoice.title;
            fruitChoicesDiv.appendChild(fruitChoice);
            let fruitRadioButton = document.createElement('input');
            fruitRadioButton.setAttribute("type", "radio");
            fruitRadioButton.name = "fruit"
            fruitChoice.appendChild(fruitRadioButton);
            fruitRadioButton.value = foodChoice.title;
        }   else if(foodChoice.type === "DESSERT") {
            let dessertChoice = document.createElement('p');
            dessertChoice.textContent = foodChoice.title;
            dessertChoicesDiv.appendChild(dessertChoice);
            let dessertRadioButton = document.createElement('input');
            dessertRadioButton.setAttribute("type", "radio");
            dessertRadioButton.name = "dessert"
            dessertChoice.appendChild(dessertRadioButton);
            dessertRadioButton.value = foodChoice.title;
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












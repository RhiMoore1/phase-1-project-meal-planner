console.log('main.js is working')


fetch("http://localhost:3000/FoodChoices")
.then(res => res.json())
.then(foodChoices => {
    const proteinChoicesDiv = document.querySelector("#proteinChoicesDiv");
    foodChoices.forEach(foodChoice => {
        if (foodChoice.type === "PROTEIN") {
            let proteinChoice1 = document.createElement('p');
            proteinChoice1.textContent = foodChoice.title;
            proteinChoicesDiv.appendChild(proteinChoice1);
        }
    })
})


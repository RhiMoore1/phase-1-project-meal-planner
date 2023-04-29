console.log('main.js is working')


fetch("http://localhost:3000/FoodChoices")
.then(res => res.json())
.then(foodChoices => {
    const proteinChoicesDiv = document.querySelector("#proteinChoicesDiv");
    foodChoices.forEach(foodChoice => {
        if (foodChoice.type === "PROTEIN") {
            let proteinChoice = document.createElement('p');
            proteinChoice.textContent = foodChoice.title;
            proteinChoicesDiv.appendChild(proteinChoice);
            let proteinRadioButton = document.createElement('input');
            proteinRadioButton.setAttribute("type", "radio");
            proteinRadioButton.name = "protein"
            proteinChoice.appendChild(proteinRadioButton);
        }
    })
})


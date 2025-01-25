document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById('startButton');
    const outputDiv = document.getElementById('output');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        formContainer.innerHTML = `
            <label for="name">What is your name?</label>
            <input type="text" id="name" placeholder="Enter your name">
            <label for="age">How old are you?</label>
            <input type="number" id="age" placeholder="Enter your age">
            <label for="color">What is your favorite color?</label>
            <input type="text" id="color" placeholder="Enter your favorite color">
            <button id="submit">Submit</button>
        `;

        document.body.appendChild(formContainer);

        const submitButton = document.getElementById('submit');
        submitButton.addEventListener('click', () => {
            let userName = document.getElementById('name').value;
            let age = document.getElementById('age').value;
            let favoriteColor = document.getElementById('color').value;

            if (!userName) {
                userName = "Guest";
            }

            outputDiv.innerHTML = "";

            let ageCategory = "";
            if (age >= 1 && age <= 12) {
                ageCategory = "Kid";
            } else if (age >= 13 && age <= 19) {
                ageCategory = "Teen";
            } else if (age >= 20 && age <= 99) {
                ageCategory = "Adult";
            } else {
                ageCategory = "Unknown";
            }

            outputDiv.innerHTML = `<p>Hi ${userName}, you are a ${ageCategory}.</p>`;
            outputDiv.innerHTML += `
                <p>Name: <strong>${userName}</strong></p>
                <p>Age: <strong>${age}</strong></p>
                <p>Favorite Color: <strong>${favoriteColor}</strong></p>
            `;

            outputDiv.innerHTML += `<p>Fun fact: </p>`;
            if (favoriteColor.toLowerCase() === 'blue') {
                outputDiv.innerHTML += `<p>Blue is often associated with calmness and serenity.</p>`;
            } else if (favoriteColor.toLowerCase() === 'green') {
                outputDiv.innerHTML += `<p>Green is known to symbolize nature, growth, and harmony.</p>`;
            } else if (favoriteColor.toLowerCase() === 'red') {
                outputDiv.innerHTML += `<p>Red is a color of energy, strength, and passion!</p>`;
            } else {
                outputDiv.innerHTML += `<p>Your favorite color is unique! It holds a special meaning to you!</p>`;
            }
        });
    });
});
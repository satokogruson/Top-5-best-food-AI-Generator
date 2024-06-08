function displayFood(response) {
    new Typewriter('#food', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateFood(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
   let restrictionSelection = document.getElementById('dietaryRestrictions');
   let  typeSelection = document.getElementById('typeOfDish');
    let apiKey = "10b545o25teaa28dd38fd076fc778f2c";

    console.log("Country:", instructionsInput.value);
    console.log("Dietary Restriction:", restrictionSelection.value);
    console.log("Type of Dish:", typeSelection.value);


    let context = `Context: The user is seeking a top 5 list of culinary recommendations based on specific dietary needs and type of dish. The dishes should be popular within the specified country or city and suitable for the given dietary restriction. Your mission is to generate a list of 5 foods formatted as follows: Each dish should be presented with a number and its name in an <h3> followed by a description in <p> tags. Separate each dish using <br/>. Conclude the list with 'SheCodes AI' in bold inside a <strong> element.`;
    let prompt = `User instructions: List up the top five popular dishes in ${instructionsInput.value} that comply with ${restrictionSelection.value} dietary preferences within the dish type of ${typeSelection.value}`; 

    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector('#food');
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛️ Generating the Top 5 foods of your selected Country/City of ${instructionsInput.value} with a dietary restriction of ${restrictionSelection.value} and the type of dish as ${typeSelection.value}</div>`;
    axios.get(apiURL).then(displayFood);

}

let foodFormElement = document.querySelector("#food-generator-form");
foodFormElement.addEventListener('submit', generateFood);
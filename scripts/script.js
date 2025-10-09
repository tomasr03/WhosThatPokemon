var pokeName;
var points = 0;
document.addEventListener("DOMContentLoaded", function() {
    loadPokemon();
});

const form = document.getElementById("pokeForm");
const input = document.getElementById("pokeAnswer");
const alertBox = document.getElementById("alertBox");
const score = document.getElementById("score");

form.addEventListener('submit', (aux) => {
    aux.preventDefault();
    const answer = input.value.trim().toLowerCase();
    if (answer === pokeName) {
        points++;
        score.textContent = points;
        alertBox.hidden = true; 
    } else {
        alertBox.hidden = false;
    }
    input.value = null;
    loadPokemon();
})

async function loadPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const answer = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomId);
    if (!answer.ok) {
        console.log("Ha ocurrido un error recuperando algún archivo externo");
    } else {
        const data = await answer.json()
        pokeName = data.name;
        const pokePhoto = data.sprites.other["official-artwork"].front_default;
        document.getElementById("pokePhoto").src = pokePhoto;
        pokeName = pokeName.trim().toLowerCase();
    }
} 
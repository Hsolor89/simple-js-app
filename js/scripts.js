// create a new variable named pokemonRepository and assign the IIFE to it 
let pokemonRepository = (function () {
    // define a list of pokemon in the array pokemonList
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
        { name: 'Squirtle', height: 0.5, types: ['water'] },
        { name: 'Charmander', height: 0.6, types: ['fire'] },
        { name: 'Blastoise', height: 1.7, types: ['water'] },
    ];

    // define separate function getAll()
    function getAll() {
        return pokemonList;
    }

    // define separate function add()
    function add(pokemon) {
        if (typeof pokemon === 'object' && 'name' in pokemon) {
            pokemonList.push(pokemon);
        }
    }

    // define separate function addListItem()
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');

        let button = document.createElement('button');
        // change the button text to the respective pokemon name 
        button.innerText = pokemon.name
        // add the class 'button-class' to the button 
        button.classList.add('button-class');

        // append the button to the list item and then the list item to the list
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        // add an event handler that calls the function showDetails(pokemon)
        button.addEventListener('click', function (event) {
            showDetails(pokemon)
        }}
}

// define separate function showDetails() that prints the received pokemon object to the console
function showDetails(pokemon) {
    console.log(pokemon);
}

// return object with the new public functions assigned as keys 
return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
}
}) ()

// forEach loop to iterate over each pokemon in pokemonList
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
})
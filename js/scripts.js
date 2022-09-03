let pokemonRepository = (function () {
let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        types: [
            'grass'
            'poison'
        ]
    },
    {
        name: 'Squirtle',
        height: 0.5,
        types: [
            'water'
        ]
    },
    {
        name: 'Charmander',
        height: '0.6',
        types: [
            'fire'
        ]
    },

    {
        name: 'Blastoise'
        height: '1.7'
        types: [
            'water'
        ]
    },
];

//this loop iterates over each of my pokemonList and writes their names and heights
//keeping this 'for' loop here for future reference 

// for (let i = 0; i < pokemonList.length; i++) {
//writes special text for pokemons with a height over 1

//if (pokemonList[i].height > 1) {
//document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that is a big pokemon!')

//writes special text for pokemons with a height less than 1 

//} else if (pokemonList[i].height < 1) {
//document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - This is a tiny size pokemon!')
//}
//}


//'getAll' and 'add' function

function getAll() {
    return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add: add
}
})();

//create forEach function that iterates for Pokemons name and height

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 1) {
        document.write('<p>' + pokemon.name + ', height: ' + pokemon.height + ' - Wow, that is a big pokemon!' + '</p>')
    } else {
        document.write('<p>' + pokemon.name + ', height: ' + pokemon.height + ' - This is a tiny size pokemon!' + '</p>')
    }

});
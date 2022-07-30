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

for (let i = 0; i < pokemonList.length; i++) {

    //writes special text for pokemons with a height over 1

    if (pokemonList[i].height > 1) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that is a big pokemon!')

    //writes special text for pokemons with a height less than 1 

    } else if (pokemonList[i].height < 1) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - This is a tiny size pokemon!')
    }
}




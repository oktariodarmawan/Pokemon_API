function getPokemonData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=36')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var pokemonContainer = document.getElementById('pokemon-container');
        var pokemons = data.results;
        pokemons.forEach(function(pokemon) {
          var pokemonCard = document.createElement('div');
          pokemonCard.classList.add('pokemon-card');
          pokemonCard.innerHTML = `
            <div class="pokemon-name">${pokemon.name}</div>
            <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png" alt="${pokemon.name}">
          `;
          pokemonContainer.appendChild(pokemonCard);
        });
      })
      .catch(function(error) {
        console.log('Terjadi kesalahan:', error);
      });
  }
  
  function getPokemonId(url) {
    var matches = url.match(/\/pokemon\/(\d+)/);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return '';
  }
  
 
  
  
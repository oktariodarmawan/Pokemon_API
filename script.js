async function getPokemonData() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
      const data = await response.json();
  
      const pokemonContainer = document.getElementById('pokemon-container');
      const pokemons = data.results;
  
      pokemons.forEach(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
  
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.innerHTML = `
          <div class="pokemon-name">${pokemonData.name}</div>
          <img class="pokemon-image" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        `;
        pokemonContainer.appendChild(pokemonCard);
      });
    } catch (error) {
      console.log('Terjadi kesalahan:', error);
    }
  }

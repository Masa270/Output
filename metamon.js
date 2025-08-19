async function getPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data = await response.json()
  //console 上で data を表示する
  console.log(data)

  var object = document.getElementById('pokemon');

  object.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>図鑑番号: ${data.id}</p>
        <p>高さ: ${data.height / 10}m</p>
        <p>重さ: ${data.weight / 10}kg</p>
    `;
}






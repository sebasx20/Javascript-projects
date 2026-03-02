// Image container
const imageContainer = document.getElementById("imageContainer");

// Create the images

async function fetchData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0",
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();

    // fetch the url of the pokemons sprite
    const urls = data.results.map((pokemon) => pokemon.url);

    return urls;
  } catch (error) {
    console.log(error);
  }
}

async function spritePrinter(fetchData) {
  try {
    const imagesUrl = await fetchData;

    const requests = imagesUrl.map((url) =>
      fetch(url).then((res) => res.json()),
    );

    const pokemonImageArray = await Promise.all(requests);

    const fragment = document.createDocumentFragment();

    pokemonImageArray.forEach((data) => {
      if (data.sprites.front_default) {
        const newImage = document.createElement("img");
        newImage.src = `${data.sprites.front_default}`;
        fragment.appendChild(newImage);
      }
    });

    imageContainer.appendChild(fragment);
    // for (let i of imagesUrl) {
    //   const image = await fetch(i);
    //   const imageData = await image.json();
    //   //   console.log(imageData.sprites.front_default);

    //   const newImage = document.createElement("img");
    //   imageContainer.appendChild(newImage);
    //   newImage.src = `${imageData.sprites.front_default}`;
    // }

    for (let i of imagesUrl) {
      //   console.log(i);
    }
  } catch (error) {
    console.log(error);
  }
}
spritePrinter(fetchData());

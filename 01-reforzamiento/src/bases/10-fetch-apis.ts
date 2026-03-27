import type { GiphyRandomResponse } from "../data/giphy.reponse";

const API_KEY = 'BgnynanNdDZyEgATIremTOfb2YVtFMnJ';




const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
    // Func para crear la imagen
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest
// Promesa para traer la info de la imagen
    .then((response) => response.json())
    .then( ({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl)
    })
    .catch( err => {
        console.error(err)
    })
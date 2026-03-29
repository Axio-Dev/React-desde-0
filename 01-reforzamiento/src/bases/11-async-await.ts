import type { GiphyRandomResponse } from "../data/giphy.reponse";

const API_KEY = 'BgnynanNdDZyEgATIremTOfb2YVtFMnJ';

const createImageInsideDOM = (url: string) => {
    // Func para crear la imagen
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

const getRandomGifUrl = async(): Promise<string> => { 
    // Función asíncrona para obtener el URL de un gif random
    
    const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data }: GiphyRandomResponse = await response.json()

    return data.images.original.url;
};

// getRandomGifUrl().then((url) => createImageInsideDOM(url)) Una manera
getRandomGifUrl().then(createImageInsideDOM);

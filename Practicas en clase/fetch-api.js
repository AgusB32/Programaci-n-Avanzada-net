

const API_KEY = 'LauVqZIpcUVuQysC9BwO6FfUg2hR7hNH';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion.then(respuesta => respuesta.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url);
    })
    .catch(console.warn);

    // esto se conoce como promesa en cadena

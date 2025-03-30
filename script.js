const API_KEY = "live_8oWXk8kSrQk7KO0AzekzvlVc7L9NYMNySac2f9NfN5XGEZoN4wt3fwL4CSCmfG9h";
const API_URL = `https://api.thedogapi.com/v1/images/search?limit=6&api_key=${API_KEY}`; 

function fetchDogs() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("galeria");
            data.forEach(dog => {
                const img = document.createElement("img");
                img.src = dog.url;
                img.alt = "Foto de perro";
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error("Error al cargar imágenes:", error));
}

fetchDogs();

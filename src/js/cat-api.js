import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';

axios.defaults.headers.common["x-api-key"] = "live_a7nkCJOI4lOXcdOz3Nuqe9HSeKQ6nrSw0vQnTtPoetJ1HHkAHaRUZxH3vqSIyFTk";
const breedSelect = document.querySelector(".breed-select");

export function fetchBreeds() {
  try {
    const response = axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then(response => response.data)
      .then(breeds => {
        const allTheBreeds = breeds
          .map(breed => `<option value= ${breed.id}>${breed.name}</option>`)
          .join('');

        breedSelect.insertAdjacentHTML('beforeend', allTheBreeds);

        const slim = new SlimSelect({
          select: '.breed-select',
        });
      });
  } catch (error) {
    console.error('Error fetching breeds:', error);
  }
}

export function fetchCatByBreed(breedId) {
  try {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .then(data => {
        const catInfo = data[0];
        const catBreed = catInfo.breeds[0];

        if (!catInfo) {
          alert("Empty data received");
          return;
        }

        const catDetailsContainer = document.querySelector(".cat-details");
        const catInfoContainer = document.querySelector(".cat-info");

        catDetailsContainer.innerHTML = `
          <p><strong class="text-info">Breed:</strong> ${catBreed.name}</p>
          <p class="text-info">${catBreed.description}</p>
          <p><strong class="text-info">Temperament:</strong> ${catBreed.temperament}</p>
        `;

        catInfoContainer.innerHTML = `
          <img src="${catInfo.url}" alt="Cat Image" class="cat-image" />
        `;
      })
      
  } catch (error) {
    console.error("Error fetching cat info:", error);
  } finally { loarer.style.display = "none" };
}



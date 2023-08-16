import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import axios from "axios";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

document.addEventListener("DOMContentLoaded", () => {
  const breedSelect = document.querySelector(".breed-select");
  const loader = document.querySelector(".loader");
  const error = document.querySelector(".error");

  loader.style.display = "block";
  breedSelect.style.display = "none";
  error.style.display = "none";

  try {
    const breeds = fetchBreeds();
    loader.style.display = "none";
    breedSelect.style.display = "flex";

    breedSelect.addEventListener("change", event => {
      const selectedBreedId = event.target.value;
      loader.style.display = "block";
      fetchCatByBreed(selectedBreedId).then(data => {
        if (!data[0]) {
          alert("Empty data received");
          document.querySelector(".container").style.display = "none";
          
          loader.style.display = "none";
          error.style.display = "block";
          return;
        }
        
        loader.style.display = "none";
        error.style.display = "none";
        const catInfo = data[0];
        console.log(catInfo);
        const catBreed = catInfo.breeds[0];
        console.log(catBreed);


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
      });
    });

  } catch (fetchError) {
    loader.style.display = "none";
    error.style.display = "block";
  }
});

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");

try {
    fetchBreeds().then(breeds => {
        const allTheBreeds = breeds
          .map(breed => `<option value= ${breed.id}>${breed.name}</option>`)
          .join('');
        loader.style.display = "none";
        breedSelect.style.display = "flex";
        breedSelect.insertAdjacentHTML('beforeend', allTheBreeds);

        const slim = new SlimSelect({
          select: '.breed-select',
        });
       breedSelect.addEventListener("change", event => {
      const selectedBreedId = event.target.value;
      loader.style.display = "block";
      
    });
      });
  } catch (error) {
    loader.style.display = "none";
    error.style.display = "block";
  }


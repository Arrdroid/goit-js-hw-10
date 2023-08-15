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
    breedSelect.style.display = "block";

    breedSelect.addEventListener("change", event => {
      const selectedBreedId = event.target.value;
      loader.style.display = "block";
      
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
        breedSelect.style.display = "block";
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


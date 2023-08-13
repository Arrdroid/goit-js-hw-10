import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select'

document.addEventListener("DOMContentLoaded", async () => {
  const breedSelect = document.querySelector(".breed-select");
  const loader = document.querySelector(".loader");
  const error = document.querySelector(".error");

  loader.style.display = "block";
  breedSelect.style.display = "none";
  error.style.display = "none";

  try {
    const breeds = await fetchBreeds();
    loader.style.display = "none";
    breedSelect.style.display = "block";

    breedSelect.addEventListener("change", event => {
      const selectedBreedId = event.target.value;
      loader.style.display = "block";
      fetchCatByBreed(selectedBreedId).finally(() => {
        loader.style.display = "none";
      });
    });
  } catch (fetchError) {
    loader.style.display = "none";
    error.style.display = "block";
  }
});

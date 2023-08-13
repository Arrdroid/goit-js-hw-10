import axios from "axios";
import SlimSelect from 'slim-select'

axios.defaults.headers.common["x-api-key"] = "live_a7nkCJOI4lOXcdOz3Nuqe9HSeKQ6nrSw0vQnTtPoetJ1HHkAHaRUZxH3vqSIyFTk";

export function fetchBreeds() {
  try {
    const response = axios.get("https://api.thecatapi.com/v1/breeds");
    const breeds = response.data;

    const breedSelect = document.querySelector(".breed-select");

    breeds.forEach(breed => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    return breeds;
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

export function fetchCatByBreed(breedId) {
  try {
    const response = axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    const catInfo = response.data[0];
    const catBreed = catInfo.breeds[0];
    console.log(catBreed);
  const catInfoContainer = document.querySelector(".cat-info");
  const catDetailsContainer = document.querySelector(".cat-details");

  catDetailsContainer.innerHTML = `
  <p><strong class="text-info">Breed:</strong> ${catBreed.name}</p>
  <p class="text-info">${catBreed.description}</p>
  <p><strong class="text-info">Temperament:</strong> ${catBreed.temperament}</p>
  `;
  catInfoContainer.innerHTML = `
  <img src="${catInfo.url}" alt="Cat Image" class="cat-image" />
  `;
  const selectbyId = document.getElementById("id-select");
  const slim = new SlimSelect({
    select: selectbyId
  });

  } catch (error) {
    console.error("Error fetching cat info:", error);
  }
}


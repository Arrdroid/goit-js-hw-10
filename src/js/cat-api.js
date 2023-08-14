import axios from "axios";
import SlimSelect from 'slim-select'

axios.defaults.headers.common["x-api-key"] = "live_a7nkCJOI4lOXcdOz3Nuqe9HSeKQ6nrSw0vQnTtPoetJ1HHkAHaRUZxH3vqSIyFTk";

export function fetchBreeds() {
  try {
    const response = axios.get("https://api.thecatapi.com/v1/breeds");
    console.log(response);
    const breeds = response.data;
    console.log(breeds);
    const breedSelect = document.querySelector(".breed-select");

    
    const allTheBreeds = breeds.map((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      return `
      <p><strong class="text-info">Breed:</strong> ${catBreed.name}</p>
      <p class="text-info">${catBreed.description}</p>
      <p><strong class="text-info">Temperament:</strong> ${catBreed.temperament}</p>
      <img src="${catInfo.url}" alt="Cat Image" class="cat-image" />
      `
    }).join("");

    breedSelect.insertAdjacentHTML("beforeend", allTheBreeds);
    
    const slim = new SlimSelect({
    select: '.breed-select',
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
    if (catBreed = false || "") {
      return alert `empty data received`;
      catDetailsContainer.innerHTML = "";
    }
    const catInfoContainer = document.querySelector(".cat-info");
    let catDetailsContainer = document.querySelector(".cat-details");

  catDetailsContainer.innerHTML = `
  <p><strong class="text-info">Breed:</strong> ${catBreed.name}</p>
  <p class="text-info">${catBreed.description}</p>
  <p><strong class="text-info">Temperament:</strong> ${catBreed.temperament}</p>
  `;
  catInfoContainer.innerHTML = `
  <img src="${catInfo.url}" alt="Cat Image" class="cat-image" />
  `;

  } catch (error) {
    console.error("Error fetching cat info:", error);
  }
}


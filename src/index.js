import "./index.css";
import * as apis from "./apis";

const locationInput = document.getElementById("locationinput");
const searchBtn = document.querySelector(".search");

async function searchWeather() {
    try {
        const data = await apis.getWeatherInfo(locationInput.value);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

searchBtn.addEventListener("click", searchWeather);

import "./index.css";
import * as apis from "./apis";
import * as DOM from "./DOM";

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

const hourlyButton = document.querySelector(".hourly");

hourlyButton.addEventListener("click", DOM.switchToHourlyForecast);

const dailyButton = document.querySelector(".daily");

dailyButton.addEventListener("click", DOM.switchToDailyForecast);

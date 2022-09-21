import "./index.css";
import * as apis from "./apis";
import * as DOM from "./DOM";

const locationInput = document.getElementById("locationinput");
const searchBtn = document.querySelector(".search");

const feelsLike = document.querySelector(".feelslikecontent")
const maxTemperature = document.querySelector(".maxcontent")
const minTemperature = document.querySelector(".mincontent")
const chanceOfRain = document.querySelector(".rainchancecontent")
const windSpeed = document.querySelector(".windspeedcontent")
const humidity = document.querySelector(".humiditycontent")
const sunrise = document.querySelector(".sunrisecontent")
const sunset = document.querySelector(".sunsetcontent")

const weatherDescription = document.querySelector(".weatherdescription")
const currentTemperature = document.querySelector(".temperature")
const currentIcon = document.querySelector(".currenticon")
const location = document.querySelector(".location")

const dailyDates = document.querySelectorAll(".date")
const dailyIcons = document.querySelectorAll(".dailyweather > img")
const dailyMaxTemps = document.querySelectorAll(".forecastmax")
const dailyMinTemps = document.querySelectorAll(".forecastmin")

async function searchWeather() {
    try {
        const data = await apis.getWeatherInfo(locationInput.value);
        console.log(data);

        DOM.changeBGImage(data.current.weather[0].id)

        feelsLike.textContent = `${Math.round(data.current.feels_like)} ºC`
        maxTemperature.textContent = `${Math.round(data.daily[0].temp.max)} ºC`
        minTemperature.textContent = `${Math.round(data.daily[0].temp.min)} ºC`
        chanceOfRain.textContent = `${Math.round(data.daily[0].pop * 100)}%`
        windSpeed.textContent = `${(Math.round(data.current.wind_speed * 3.6 * 10)) / 10} Km/H`
        humidity.textContent = `${data.current.humidity}%`
        sunrise.textContent = convertUnixToHour(data.current.sunrise, data.timezone)
        sunset.textContent = convertUnixToHour(data.current.sunset, data.timezone);

        weatherDescription.textContent = convertToTitleCase(data.current.weather[0].description)
        location.textContent = `${(await apis.getLocationName(locationInput.value)).locationName}, ${(await apis.getLocationName(locationInput.value)).countryName}`
        currentTemperature.textContent = `${Math.round(data.current.temp)} ºC`
        DOM.changeCurrentWeatherIcon(data.current.weather[0].icon)


    } catch (error) {
        console.log(error);
    }
}

function convertToTitleCase(string) {
    const arrayOfWords = string.split(" ");

    const capitalizedArray = []
    arrayOfWords.forEach((word) => capitalizedArray.push(word.charAt(0).toUpperCase() + word.substr(1)))
    return capitalizedArray.join(" ")
}

function convertUnixToHour(time, timeZone) {
    const options = {
        hour: "numeric",
        timeZone,
        minute: "numeric"
    };

    const hour = new Date(time * 1000)
    return hour.toLocaleString("en-US", options)
}

searchBtn.addEventListener("click", searchWeather);

const hourlyButton = document.querySelector(".hourly");

hourlyButton.addEventListener("click", DOM.switchToHourlyForecast);

const dailyButton = document.querySelector(".daily");

dailyButton.addEventListener("click", DOM.switchToDailyForecast);

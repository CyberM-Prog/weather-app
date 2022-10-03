import "./index.css";
import * as apis from "./apis";
import * as DOM from "./DOM";

const locationInput = document.getElementById("locationinput");
const searchBtn = document.querySelector(".search");

const feelsLike = document.querySelector(".feelslikecontent");
const maxTemperature = document.querySelector(".maxcontent");
const minTemperature = document.querySelector(".mincontent");
const chanceOfRain = document.querySelector(".rainchancecontent");
const windSpeed = document.querySelector(".windspeedcontent");
const humidity = document.querySelector(".humiditycontent");
const sunrise = document.querySelector(".sunrisecontent");
const sunset = document.querySelector(".sunsetcontent");

const weatherDescription = document.querySelector(".weatherdescription");
const currentTemperature = document.querySelector(".temperature");
const currentIcon = document.querySelector(".currenticon");
const location = document.querySelector(".location");

const container = document.querySelector("#container");
container.classList.add("hideall");

const changeUnitsButton = document.querySelector(".unit");

async function searchWeather() {
    try {
        let locationChosen;

        if (locationInput.value) {
            locationChosen = locationInput.value;
        } else {
            locationChosen = "Lisbon";
        }

        if (!changeUnitsButton.classList.contains("farenheit")) {
            const data = await apis.getWeatherInfoCelsius(locationChosen);
            console.log(data);

            feelsLike.textContent = `${Math.round(data.current.feels_like)} ºC`;
            maxTemperature.textContent = `${Math.round(
                data.daily[0].temp.max
            )} ºC`;
            minTemperature.textContent = `${Math.round(
                data.daily[0].temp.min
            )} ºC`;
            chanceOfRain.textContent = `${Math.round(
                data.daily[0].pop * 100
            )}%`;
            windSpeed.textContent = `${
                Math.round(data.current.wind_speed * 3.6 * 10) / 10
            } Km/H`;
            humidity.textContent = `${data.current.humidity}%`;
            sunrise.textContent = convertUnixToHour(
                data.current.sunrise,
                data.timezone
            );
            sunset.textContent = convertUnixToHour(
                data.current.sunset,
                data.timezone
            );

            weatherDescription.textContent = convertToTitleCase(
                data.current.weather[0].description
            );
            location.textContent = `${
                (await apis.getLocationName(locationChosen)).locationName
            }, ${(await apis.getLocationName(locationChosen)).countryName}`;
            currentTemperature.textContent = `${Math.round(
                data.current.temp
            )} ºC`;

            currentIcon.src = DOM.getWeatherIcon(data.current.weather[0].icon);

            const days = createDaysArray(data.daily, data.timezone);
            const dailyIcons = createDailyIconsArray(data.daily);
            const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºC");
            const dailyMinTemps = getDailyMinTemps(data.daily, "ºC");

            DOM.changeDailyForecast(
                days,
                dailyIcons,
                dailyMaxTemps,
                dailyMinTemps
            );

            const hours = createHoursArray(data.hourly, data.timezone);
            const hourlyIcons = createHourlyIconsArray(data.hourly);
            const hourlyTemps = getHourlyTemps(data.hourly, "ºC");

            DOM.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

            DOM.changeBGImage(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
            DOM.improveReadability(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
        } else {
            const data = await apis.getWeatherInfoFarenheits(locationChosen);
            console.log(data);

            feelsLike.textContent = `${Math.round(data.current.feels_like)} ºF`;
            maxTemperature.textContent = `${Math.round(
                data.daily[0].temp.max
            )} ºF`;
            minTemperature.textContent = `${Math.round(
                data.daily[0].temp.min
            )} ºF`;
            chanceOfRain.textContent = `${Math.round(
                data.daily[0].pop * 100
            )}%`;
            windSpeed.textContent = `${
                Math.round(data.current.wind_speed * 10) / 10
            } Mph`;
            humidity.textContent = `${data.current.humidity}%`;
            sunrise.textContent = convertUnixToHour(
                data.current.sunrise,
                data.timezone
            );
            sunset.textContent = convertUnixToHour(
                data.current.sunset,
                data.timezone
            );

            weatherDescription.textContent = convertToTitleCase(
                data.current.weather[0].description
            );
            location.textContent = `${
                (await apis.getLocationName(locationChosen)).locationName
            }, ${(await apis.getLocationName(locationChosen)).countryName}`;
            currentTemperature.textContent = `${Math.round(
                data.current.temp
            )} ºF`;

            currentIcon.src = DOM.getWeatherIcon(data.current.weather[0].icon);

            const days = createDaysArray(data.daily, data.timezone);
            const dailyIcons = createDailyIconsArray(data.daily);
            const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºF");
            const dailyMinTemps = getDailyMinTemps(data.daily, "ºF");

            DOM.changeDailyForecast(
                days,
                dailyIcons,
                dailyMaxTemps,
                dailyMinTemps
            );

            const hours = createHoursArray(data.hourly, data.timezone);
            const hourlyIcons = createHourlyIconsArray(data.hourly);
            const hourlyTemps = getHourlyTemps(data.hourly, "ºF");

            DOM.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

            DOM.changeBGImage(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
            DOM.improveReadability(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
        }

        changeUnitsButton.addEventListener("click", switchUnits);

        async function switchUnits() {
            if (changeUnitsButton.classList.contains("farenheit")) {
                const data = await apis.getWeatherInfoCelsius(locationChosen);
                console.log(data);
                console.log(locationChosen);

                feelsLike.textContent = `${Math.round(
                    data.current.feels_like
                )} ºC`;
                maxTemperature.textContent = `${Math.round(
                    data.daily[0].temp.max
                )} ºC`;
                minTemperature.textContent = `${Math.round(
                    data.daily[0].temp.min
                )} ºC`;

                windSpeed.textContent = `${
                    Math.round(data.current.wind_speed * 3.6 * 10) / 10
                } Km/H`;

                currentTemperature.textContent = `${Math.round(
                    data.current.temp
                )} ºC`;

                const days = createDaysArray(data.daily, data.timezone);
                const dailyIcons = createDailyIconsArray(data.daily);
                const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºC");
                const dailyMinTemps = getDailyMinTemps(data.daily, "ºC");

                DOM.changeDailyForecast(
                    days,
                    dailyIcons,
                    dailyMaxTemps,
                    dailyMinTemps
                );

                const hours = createHoursArray(data.hourly, data.timezone);
                const hourlyIcons = createHourlyIconsArray(data.hourly);
                const hourlyTemps = getHourlyTemps(data.hourly, "ºC");

                DOM.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

                changeUnitsButton.classList.remove("farenheit");
                changeUnitsButton.textContent = "Switch to ºF";
            } else {
                const dataFarenheits = await apis.getWeatherInfoFarenheits(
                    locationChosen
                );
                console.log(dataFarenheits);

                feelsLike.textContent = `${Math.round(
                    dataFarenheits.current.feels_like
                )} ºF`;
                maxTemperature.textContent = `${Math.round(
                    dataFarenheits.daily[0].temp.max
                )} ºF`;
                minTemperature.textContent = `${Math.round(
                    dataFarenheits.daily[0].temp.min
                )} ºF`;

                windSpeed.textContent = `${
                    Math.round(dataFarenheits.current.wind_speed * 10) / 10
                } Mph`;

                currentTemperature.textContent = `${Math.round(
                    dataFarenheits.current.temp
                )} ºF`;

                const days = createDaysArray(
                    dataFarenheits.daily,
                    dataFarenheits.timezone
                );
                const dailyIcons = createDailyIconsArray(dataFarenheits.daily);
                const dailyMaxTemps = getDailyMaxTemps(
                    dataFarenheits.daily,
                    "ºF"
                );
                const dailyMinTemps = getDailyMinTemps(
                    dataFarenheits.daily,
                    "ºF"
                );

                DOM.changeDailyForecast(
                    days,
                    dailyIcons,
                    dailyMaxTemps,
                    dailyMinTemps
                );

                const hours = createHoursArray(
                    dataFarenheits.hourly,
                    dataFarenheits.timezone
                );
                const hourlyIcons = createHourlyIconsArray(
                    dataFarenheits.hourly
                );
                const hourlyTemps = getHourlyTemps(dataFarenheits.hourly, "ºF");

                DOM.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

                changeUnitsButton.classList.add("farenheit");
                changeUnitsButton.textContent = "Switch to ºC";
            }
        }

        container.classList.remove("hideall");

        searchBtn.addEventListener("click", function () {
            changeUnitsButton.removeEventListener("click", switchUnits);
        });
    } catch (error) {
        console.log(error);
    }
}

function createDaysArray(days, timeZone) {
    const daysArray = [];

    for (let i = 1; i <= 7; i++) {
        const convertedDay = `${convertUnixToWeekday(
            days[i].dt,
            timeZone
        )}, ${convertUnixToDay(days[i].dt, timeZone)}`;
        daysArray.push(convertedDay);
    }
    return daysArray;
}

function createDailyIconsArray(days) {
    const iconsArray = [];

    for (let i = 1; i <= 7; i++) {
        iconsArray.push(days[i].weather[0].icon);
    }
    return iconsArray;
}

function getDailyMaxTemps(days, unit) {
    const maxTempsArray = [];

    for (let i = 1; i <= 7; i++) {
        maxTempsArray.push(`${Math.round(days[i].temp.max)} ${unit}`);
    }
    return maxTempsArray;
}

function getDailyMinTemps(days, unit) {
    const minTempsArray = [];

    for (let i = 1; i <= 7; i++) {
        minTempsArray.push(`${Math.round(days[i].temp.min)} ${unit}`);
    }
    return minTempsArray;
}

function createHoursArray(hours, timeZone) {
    const hoursArray = [];

    for (let i = 1; i <= 24; i++) {
        const convertedHour = `${convertWithoutMinutes(hours[i].dt, timeZone)}`;
        hoursArray.push(convertedHour);
    }
    return hoursArray;
}

function createHourlyIconsArray(hours) {
    const iconsArray = [];

    for (let i = 1; i <= 24; i++) {
        iconsArray.push(hours[i].weather[0].icon);
    }
    return iconsArray;
}

function getHourlyTemps(hours, unit) {
    const TempsArray = [];

    for (let i = 1; i <= 24; i++) {
        TempsArray.push(`${Math.round(hours[i].temp)} ${unit}`);
    }
    return TempsArray;
}

function convertToTitleCase(string) {
    const arrayOfWords = string.split(" ");

    const capitalizedArray = [];
    arrayOfWords.forEach((word) =>
        capitalizedArray.push(word.charAt(0).toUpperCase() + word.substr(1))
    );
    return capitalizedArray.join(" ");
}

function convertUnixToHour(time, timeZone) {
    const options = {
        hour: "numeric",
        timeZone,
        minute: "numeric",
    };

    const hour = new Date(time * 1000);
    return hour.toLocaleString("en-US", options);
}

function convertWithoutMinutes(time, timeZone) {
    const options = {
        hour: "numeric",
        timeZone,
    };

    const hour = new Date(time * 1000);
    return hour.toLocaleString("en-US", options);
}

function convertUnixToDay(time, timeZone) {
    const options = {
        day: "numeric",
        timeZone,
    };

    const day = new Date(time * 1000);
    return day.toLocaleString("en-US", options);
}

function convertUnixToWeekday(time, timeZone) {
    const options = {
        weekday: "long",
        timeZone,
    };

    const weekday = new Date(time * 1000);
    return weekday.toLocaleString("en-US", options);
}

searchBtn.addEventListener("click", searchWeather);

const hourlyButton = document.querySelector(".hourly");

hourlyButton.addEventListener("click", DOM.switchToHourlyForecast);

const dailyButton = document.querySelector(".daily");

dailyButton.addEventListener("click", DOM.switchToDailyForecast);

DOM.createFirstHourlyDivs();
DOM.hideFirstHourlyDivs();

DOM.createLastHourlyDivs();
DOM.hideLastHourlyDivs();

searchWeather();

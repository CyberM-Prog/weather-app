const container = document.getElementById("container");

export function changeBGImage(code, icon) {
    if (code >= 200 && code < 300) {
        container.style.backgroundImage =
            "url(./assets/Images/johannes-plenio-ESL1rIs9j48-unsplash.jpg)";
    } else if (code >= 300 && code < 400) {
        container.style.backgroundImage =
            "url(./assets/Images/roman-synkevych-qPvBmSvmohs-unsplash.jpg)";
    } else if (code >= 500 && code < 600) {
        container.style.backgroundImage =
            "url(./assets/Images/rodolfo-cuadros-8wKpFqxDJT0-unsplash.jpg)";
    } else if (code >= 600 && code < 700) {
        container.style.backgroundImage =
            "url(./assets/Images/the-nigmatic-RDh9V-c4iSI-unsplash\\ \\(1\\).jpg)";
    } else if (code > 800 && code < 900) {
        container.style.backgroundImage =
            "url(./assets/Images/nick-fewings-ZtDiJzokZi0-unsplash.jpg)";
    } else if (code === 701 || code === 741) {
        container.style.backgroundImage =
            "url(./assets/Images/dave-hoefler-od287vQyufw-unsplash.jpg)";
    } else if (
        code === 711 ||
        code === 721 ||
        code === 731 ||
        code === 751 ||
        code === 761 ||
        code === 762
    ) {
        container.style.backgroundImage =
            "url(./assets/Images/chris-leboutillier-be8mnFXzBgo-unsplash.jpg)";
    } else if (code === 771) {
        container.style.backgroundImage =
            "url(./assets/Images/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg)";
    } else if (code === 781) {
        container.style.backgroundImage =
            "url(./assets/Images/espen-bierud-W43gm6TD118-unsplash.jpg)";
    } else if (icon === "01n") {
        container.style.backgroundImage =
            "url(./assets/Images/ryan-hutton-Jztmx9yqjBw-unsplash.jpg)";
    } else {
        container.style.backgroundImage =
            "url(./assets/Images/william-bout-RPzWI0rolS8-unsplash.jpg)";
    }
}

export function improveReadability(code, icon) {
    if (code >= 500 && code < 600) {
        container.style.backgroundColor = "rgba(0, 0, 0, 0.49)";
    } else if (icon === "01n") {
        container.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else container.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

const dailyDivs = document.querySelectorAll(".dailydivs");

export function switchToHourlyForecast() {
    const forecastChildren = document.querySelectorAll(".forecast > *");
    forecastChildren.forEach((child) => child.classList.add("hide"));

    const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");
    firstHourlyDivs.forEach((div) => div.classList.remove("hide"));

    const rightArrow = document.querySelector(".rightarrow");
    rightArrow.classList.remove("hide");
}

const forecastDiv = document.querySelector(".forecast");

export function createFirstHourlyDivs() {
    for (let i = 1; i <= 12; i++) {
        createHourlyDiv("firsthourlydivs");
    }
    createRightArrow();
}

function createHourlyDiv(className) {
    const hourlyDiv = document.createElement("div");
    hourlyDiv.classList.add(className);
    forecastDiv.appendChild(hourlyDiv);

    const hour = document.createElement("div");
    hour.classList.add("hour");
    hour.textContent = "12 A.M.";
    hourlyDiv.appendChild(hour);

    const hourlyIcon = document.createElement("img");
    hourlyIcon.classList.add("hourlyicon");
    hourlyIcon.src = "./assets/Images/cloud-drizzle.svg";
    hourlyDiv.appendChild(hourlyIcon);

    const hourlyTemperature = document.createElement("div");
    hourlyTemperature.classList.add("hourlytemperature");
    hourlyTemperature.textContent = "40 ºC";
    hourlyDiv.appendChild(hourlyTemperature);
}

function createRightArrow() {
    const rightArrow = document.createElement("img");
    rightArrow.classList.add("rightarrow");
    rightArrow.classList.add("hide");
    rightArrow.setAttribute("src", "./assets/Images/arrow-right-circle.svg");
    rightArrow.addEventListener("click", showLastHourlyDivs);
    forecastDiv.appendChild(rightArrow);
}

export function createLastHourlyDivs() {
    for (let i = 13; i <= 24; i++) {
        createHourlyDiv("lasthourlydivs");
    }
    createLeftArrow();
}

function createLeftArrow() {
    const leftArrow = document.createElement("img");
    leftArrow.classList.add("leftarrow");
    leftArrow.classList.add("hide");
    leftArrow.setAttribute("src", "./assets/Images/arrow-left-circle.svg");
    forecastDiv.appendChild(leftArrow);
}

function showLastHourlyDivs() {
    hideFirstHourlyDivs();

    const lastHourlyDivs = document.querySelector(".lasthourlydivs");

    if (!lastHourlyDivs) createLastHourlyDivs();
    else unhideLastHourlyDivs();

    this.classList.add("hide");

    const leftArrow = document.querySelector(".leftarrow");
    leftArrow.addEventListener("click", showFirstHourlyDivs);
}

export function hideFirstHourlyDivs() {
    const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");

    firstHourlyDivs.forEach((div) => div.classList.add("hide"));
}

function showFirstHourlyDivs() {
    const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");

    firstHourlyDivs.forEach((div) => div.classList.remove("hide"));

    hideLastHourlyDivs();
    this.classList.add("hide");

    const rightArrow = document.querySelector(".rightarrow");
    rightArrow.classList.remove("hide");
}

export function hideLastHourlyDivs() {
    const lastHourlyDivs = document.querySelectorAll(".lasthourlydivs");

    lastHourlyDivs.forEach((div) => div.classList.add("hide"));
}

function unhideLastHourlyDivs() {
    const lastHourlyDivs = document.querySelectorAll(".lasthourlydivs");

    lastHourlyDivs.forEach((div) => div.classList.remove("hide"));

    const leftArrow = document.querySelector(".leftarrow");
    leftArrow.classList.remove("hide");
}

export function switchToDailyForecast() {
    const forecastChildren = document.querySelectorAll(".forecast > *");
    forecastChildren.forEach((child) => child.classList.add("hide"));

    dailyDivs.forEach((div) => div.classList.remove("hide"));
}

export function changeTextContent(text) {
    this.textContent = text;
}

export function getWeatherIcon(code) {
    if (code === "01d") return "./assets/Images/sun.svg";
    if (code === "01n") return "./assets/Images/moon.svg";
    if (code === "02d") return "./assets/Images/cloud-sun.svg";
    if (code === "02n") return "./assets/Images/cloud-moon.svg";
    if (code === "03d" || code === "03n") return "./assets/Images/cloud (1).svg";
    if (code === "04d" || code === "04n") return "./assets/Images/clouds.svg";
    if (code === "09d" || code === "09n" || code === "10d" || code === "10n")
        return "./assets/Images/cloud-rain (1).svg";
    if (code === "11d" || code === "11n")
        return "./assets/Images/cloud-lightning (2).svg";
    if (code === "13d" || code === "13n") return "./assets/Images/snow.svg";
    if (code === "50d" || code === "50n") return "./assets/Images/cloud-fog.svg";
}

export function changeDailyForecast(days, codes, maxTemps, minTemps) {
    const dailyDates = document.querySelectorAll(".date");
    const dailyForecastIcons = document.querySelectorAll(".forecasticon");
    const dailyMaxTemps = document.querySelectorAll(".forecastmax");
    const dailyMinTemps = document.querySelectorAll(".forecastmin");

    for (let i = 0; i < 7; i++) {
        dailyDates[i].textContent = days[i];

        dailyForecastIcons[i].src = getWeatherIcon(codes[i]);

        dailyMaxTemps[i].textContent = maxTemps[i];

        dailyMinTemps[i].textContent = minTemps[i];
    }
}

export function changeHourlyForecast(hours, codes, temps) {
    const hourElements = document.querySelectorAll(".hour");
    const hourlyForecastIcons = document.querySelectorAll(".hourlyicon");
    const hourlyTemps = document.querySelectorAll(".hourlytemperature");

    for (let i = 0; i < 24; i++) {
        hourElements[i].textContent = hours[i];

        hourlyForecastIcons[i].src = getWeatherIcon(codes[i]);

        hourlyTemps[i].textContent = temps[i];
    }
}

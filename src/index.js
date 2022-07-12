import "./index.css";
import * as apis from "./apis";

const locationInput = document.getElementById("locationinput");
const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", async () => {
    const data = await apis.getWeatherInfo(locationInput.value);
    console.log(data);
});

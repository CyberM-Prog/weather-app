const key = "9b2ecba753a2d0b501b16be3452469ff";

export async function convertLocation(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`,
        {mode: "cors"}
    );
    const data = await response.json();
    const coordinates = {lat: data[0].lat, lon: data[0].lon};
    return coordinates;
}

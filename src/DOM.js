const container = document.getElementById("container")

export function changeBGImage(code) {
    if (code >= 200 && code < 300) {
        container.style.backgroundImage = "url(../src/Images/johannes-plenio-ESL1rIs9j48-unsplash.jpg)"
    }
    else if ((code >= 300 && code < 400)) {
        container.style.backgroundImage = "url(../src/Images/roman-synkevych-qPvBmSvmohs-unsplash.jpg)"
    }
    else if ((code >= 500 && code < 600)) {
        container.style.backgroundImage = "url(../src/Images/rodolfo-cuadros-8wKpFqxDJT0-unsplash.jpg)"
    }
    else if ((code >= 600 && code < 700)) {
        container.style.backgroundImage = "url(../src/Images/the-nigmatic-RDh9V-c4iSI-unsplash\\ \\(1\\).jpg)"
    }
    else if ((code > 800 && code < 900)) {
        container.style.backgroundImage = "url(../src/Images/nick-fewings-ZtDiJzokZi0-unsplash.jpg)"
    }
    else if ((code === 701 || code === 741)) {
        container.style.backgroundImage = "url(../src/Images/dave-hoefler-od287vQyufw-unsplash.jpg)"
    }
    else if ((code === 711 || code === 721 || code === 731 || code === 751 || code === 761 || code === 762)) {
        container.style.backgroundImage = "url(../src/Images/chris-leboutillier-be8mnFXzBgo-unsplash.jpg)"
    }
    else if ((code === 771)) {
        container.style.backgroundImage = "url(../src/Images/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg)"
    }
    else if ((code === 781)) {
        container.style.backgroundImage = "url(../src/Images/espen-bierud-W43gm6TD118-unsplash.jpg)"
    }
    else container.style.backgroundImage = "url(../src/Images/william-bout-RPzWI0rolS8-unsplash.jpg)"
}
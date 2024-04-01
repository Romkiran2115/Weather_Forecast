function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "5113e9c7cbbebe1a4fe0041674ed6bf0"; // Replace "myWeatherAppKey" with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log("API URL:", apiUrl); // Log the constructed API URL

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather Data:", data); // Log the weather data received from the API
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>Failed to fetch weather data. Please try again.</p>";
        });
}
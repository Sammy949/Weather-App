// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
// 2837cebcf903ec8086e6c7ac3b2576c1

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5896149ed2bb0fa44a39a96c0d99b74a

const apiKey = "5896149ed2bb0fa44a39a96c0d99b74a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector("#weatherImg");
const weatherBg = document.getElementById("weatherBg");
const weatherInfo = document.getElementById("info")

console.log(searchBox.value);
async function checkWeather(city) {
	const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);

	if (response.status == 404) {
		document.querySelector("#invalid").style.display = "block";
		document.querySelector("#info").style.display = "none";
	} else {
		document.querySelector("#invalid").style.display = "none";
		document.querySelector("#info").style.display = "block";
	}

	var data = await response.json();

	console.log(data);

	document.querySelector(
		"#cityName"
	).innerHTML = `<h2 class="text-3xl font-normal mt-0" id="cityName">${data.name}</h1>`;

	document.querySelector(
		"#temperature"
	).innerHTML = `<h1 class="text-6xl font-semibold" id="temperature">${data.main.temp}ºC</h1>`;

	document.querySelector(
		"#humidity"
	).innerHTML = `<p id="humidity">${data.main.humidity}%</p>`;

	document.querySelector(
		"#wind"
	).innerHTML = `<p id="wind">${data.wind.speed}Km/h</p>`;

	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "/Cloudy.svg";
		weatherBg.style.background = "url('/cloudy.jpg')";
		weatherBg.style.backgroundSize = "cover";
		weatherBg.style.backgroundPosition = "center";
		weatherBg.style.color = "black"
	}
	if (data.weather[0].main == "Clear") {
		weatherIcon.src = "/Sunny.svg";
		weatherBg.style.background = "url('/clear.jpg')";
		weatherBg.style.backgroundSize = "cover";
		weatherBg.style.backgroundPosition = "center";
		weatherBg.style.color = "black"
	}
	if (data.weather[0].main == "Rain") {
		weatherIcon.src = "/Thunder.svg";
		weatherBg.style.background = "url('/rain.jpg')";
		weatherBg.style.backgroundSize = "cover";
		weatherBg.style.backgroundPosition = "center";
	}
	if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "/Rain.svg";
		weatherBg.style.background = "url('/drizzle.jpg')";
		weatherBg.style.backgroundSize = "cover";
		weatherBg.style.backgroundPosition = "center";
	}
	if (data.weather[0].main == "Mist") {
		weatherIcon.src = "/Wind.svg";
		weatherBg.style.background = "url('/mist.jpg')";
		weatherBg.style.backgroundSize = "cover";
		weatherBg.style.backgroundPosition = "center";
	}
}

searchBtn.addEventListener("click", () => {
	weatherInfo.style.display = "block"
	checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		checkWeather(searchBox.value);
		weatherInfo.style.display = "block"
	}
})
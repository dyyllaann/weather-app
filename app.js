let data = new Object();

let city = "London";
  
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=017526151d00c5ca477e7e5f228ce14b`)
  .then(function (response) {
    return response.json();
  })
  .then(function (APIdata) {
    console.log(APIdata);

    /* Main Section */

    // Current Temperature
    data.current = `${Math.round(APIdata.main.temp).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
			useGrouping: false,
		})}°`;

    // Location Name
    data.name = APIdata.name;

    // Time
    let time = new Date(APIdata.dt*1000);
    data.time = `${time.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		})} – ${time.toLocaleDateString("en-us", {
			weekday: "long",
			month: "short",
			day: "numeric",
		})}`;

    // Weather
    data.weather = APIdata.weather[0].main;

    /* Sidebar */
    data.humidity = `${APIdata.main.humidity}%`;
    data.wind = APIdata.wind.speed;
    data.low = formatTemp(APIdata.main.temp_min);
    data.high = formatTemp(APIdata.main.temp_max);

    for (const [key, value] of Object.entries(data)) {
      document.getElementById(key).innerHTML = value;
    }
  })
  .catch(function (err) {
    console.log('Error:', err);
  });

function formatTemp(temperature) {
  return `${Math.round(temperature).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})}°`;
}

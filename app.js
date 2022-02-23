let data = new Object();
let defaultCity = "Seattle";

const svgPack = {
  // Day Pack
	"01d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="60" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="128" y1="36" x2="128" y2="16" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="62.9" y1="62.9" x2="48.8" y2="48.8" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="36" y1="128" x2="16" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="62.9" y1="193.1" x2="48.8" y2="207.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="220" x2="128" y2="240" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="193.1" y1="193.1" x2="207.2" y2="207.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="220" y1="128" x2="240" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="193.1" y1="62.9" x2="207.2" y2="48.8" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>',
	"02d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="79.7" y1="56.7" x2="75.5" y2="33.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="48.7" y1="76.5" x2="29" y2="62.7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40.7" y1="112.3" x2="17.1" y2="116.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="115.5" y1="64.7" x2="129.3" y2="45" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M51.6,135.4a49.1,49.1,0,0,1-10.9-23.1,48,48,0,0,1,91.1-27.9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"03d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"04d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"09d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="240" x2="154.3" y2="200" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="98.7" y1="208" x2="130.3" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"10d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="240" x2="154.3" y2="200" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="98.7" y1="208" x2="130.3" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"11d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="128 240 154.3 200 104 200 130.3 160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"13d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="64" x2="128" y2="192" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="104 40 128 64 152 40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="104 216 128 192 152 216" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="72.6" y1="96" x2="183.4" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="39.8 104.8 72.6 96 63.8 63.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="192.2 192.8 183.4 160 216.2 151.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="72.6" y1="160" x2="183.4" y2="96" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="63.8 192.8 72.6 160 39.8 151.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="216.2 104.8 183.4 96 192.2 63.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>',
	"50d":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  // Night Pack
  "01n":
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  "02n":
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M47,138.9A64.1,64.1,0,0,1,9.6,94.4h0A68.3,68.3,0,0,0,24,96,64.1,64.1,0,0,0,88,32a68.3,68.3,0,0,0-1.6-14.4h0A64,64,0,0,1,136,80c0,1,0,2-.1,3" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  "03n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"04n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"09n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="240" x2="154.3" y2="200" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="98.7" y1="208" x2="130.3" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"10n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="240" x2="154.3" y2="200" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="98.7" y1="208" x2="130.3" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"11n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="128 240 154.3 200 104 200 130.3 160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M88,92a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
	"13n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="64" x2="128" y2="192" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="104 40 128 64 152 40" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="104 216 128 192 152 216" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="72.6" y1="96" x2="183.4" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="39.8 104.8 72.6 96 63.8 63.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="192.2 192.8 183.4 160 216.2 151.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="72.6" y1="160" x2="183.4" y2="96" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="63.8 192.8 72.6 160 39.8 151.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="216.2 104.8 183.4 96 192.2 63.2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>',
	"50n":
		'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,72s40-32,88,0,88,0,88,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M40,128s40-32,88,0,88,0,88,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M40,184s40-32,88,0,88,0,88,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
};

const importData = function (city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=017526151d00c5ca477e7e5f228ce14b`)
    .then(function (response) {
      return response.json();
    })
    .then(function (APIdata) {
      console.log(APIdata);

      /* Main Section */
      // Current Temperature
      data.current = formatTemp(APIdata.main.temp);

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

      // Icon
      data.icon = svgPack[APIdata.weather[0].icon];

      // Weather
      data.weather = APIdata.weather[0].main;

      /* Sidebar */
      // Humidity
      data.humidity = `${APIdata.main.humidity}%`;

      // Wind
      data.wind = `${APIdata.wind.speed}km/h`;

      // Low Temperature
      data.low = formatTemp(APIdata.main.temp_min);

      // High Temperature
      data.high = formatTemp(APIdata.main.temp_max);

      // Append value of each metric to its corresponding id
      for (const [key, value] of Object.entries(data)) {
        document.getElementById(key).innerHTML = value;
      }
    })
    .catch(function (err) {
      console.log('Error:', err);
      for (const [key] of Object.entries(data)) {
        document.getElementById(key).innerHTML = "";
      }
      data.name = "city not found. :(";
      document.getElementById('name').innerHTML = data.name;
    });
};

function formatTemp(temperature) {
  return `${Math.round(temperature).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})}°`;
}

importData(defaultCity);

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", function() {importData(searchInput.value);});
searchInput.addEventListener("keyup", function (e) {
  if (e.code == 'Enter') {
    importData(searchInput.value);
  }
});
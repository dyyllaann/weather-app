
// URL (required), options (optional)
fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=017526151d00c5ca477e7e5f228ce14b')
  // mode: 'cors'
  .then(function(response) {
    console.log(response.json());
  })
  .catch(function(err) {
    // Error :(
    console.log("It didn't work!");
  });
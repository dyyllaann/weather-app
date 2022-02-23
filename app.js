const city = "London";
  
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=017526151d00c5ca477e7e5f228ce14b`)
  .then(function (response) {
    console.log(response.json());
  })
  .catch(function (err) {
    console.log("It didn't work!");
  });
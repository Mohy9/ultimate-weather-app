// my accu weather keys
//4vNt3bghWTbeosQRABjaauRL6AjmhwW8
//GPXGqy7AcGYAakx5u02XAgDA5sJtzKvb

// http://dataservice.accuweather.com/locations/v1/topcities/50
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}

//function returns locations from Accuweather.com
export default function getCities() {
  return fetch('http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=GPXGqy7AcGYAakx5u02XAgDA5sJtzKvb')
		.then(response=> response.json());
}

const forecastUrl = city => `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=GPXGqy7AcGYAakx5u02XAgDA5sJtzKvb`;

// function returns forecasts from Accuweather.com
export function getForecast(city) {
  return fetch(forecastUrl(city))
    .then(response => response.json());
}



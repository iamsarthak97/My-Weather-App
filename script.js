const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c18a535661mshd409124c3032251p1abd11jsnd945feb42204',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct.innerHTML =    response.cloud_pct 
        temp1.innerHTML =  response.temp
        temp.innerHTML =  response.temp
        max_temp.innerHTML =  response.max_temp 
        min_temp.innerHTML =  response.min_temp
        feels_like.innerHTML =  response.feels_like
        humidity.innerHTML =  response.humidity
        humidity1.innerHTML =  response.humidity
        sunrise.innerHTML =  response.sunrise
        sunset.innerHTML =  response.sunset
        wind_degrees.innerHTML =  response.wind_degrees
        wind_speed.innerHTML =  response.wind_speed
        wind_speed1.innerHTML =  response.wind_speed
    })
	.catch(err => console.error(err));

    
}




submit1.addEventListener("click" , (e)=>{
        e.preventDefault();
        getweather(city.value);
    })

 getweather("Pune")
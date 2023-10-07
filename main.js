const apiKey="aa3124b054f803c71245d94a35d19bbe";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
                
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
                }
    else if(data.weather[0].main=="Sunny"){
        weatherIcon.src="images/sun.png";
    }
    else if(data.weather[0].main=="Night"){
        weatherIcon.src="images/night.png";
    }
            
    document.querySelector(".weather").style.display="block";
};

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

document.addEventListener('keypress', (event)=>{
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if(keyCode === 13) {
        btn.click();
    }
       
});
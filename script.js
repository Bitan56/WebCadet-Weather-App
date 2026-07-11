const searchInput = document.querySelector("#location-input")
const searchBtn = document.querySelector("#search-btn")
const container = document.querySelector(".container")

async function fetchWeather(area) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a74f28eb3ee84fa7a8d61405261107&q=${area}&aqi=no`)

        if (!response.ok) {
            alert("Location does not Exist in our Database")
        }

        const data = await response.json()
        
        container.innerHTML = `
        <div class="top-row">
            <div class="data-container" id="city">${data.location.name}</div>
            <div class="data-container" id="region">${data.location.region}</div>
            <div class="data-container" id="country">${data.location.country}</div>
            <div class="data-container" id="lat">latitude: ${data.location.lat}</div>
            <div class="data-container" id="lon">longitude: ${data.location.lon}</div>
            <div class="data-container" id="zone">${data.location.tz_id}</div>
            <div class="data-container" id="local-time">${data.location.localtime}</div>
        </div>

        <div class="middle-row">
            <div class="data-container">
                <div class="container-heading">Temperature(in °C):</div>
                <div class="container-text"><span>${data.current.temp_c}</span>°C</div>
            </div>
            <div class="data-container">
                <div class="container-heading">Temperature(in °F):</div>
                <div class="container-text"><span>${data.current.temp_f}</span>°F</div>
            </div>
            <div class="data-container">
                <div class="container-heading">Condition:</div>
                <div class="container-text">${data.current.condition.text}</div>
            </div>
            <div class="data-container">
                <div class="container-heading">Wind:</div>
                <div class="container-text"><span>${data.current.wind_kph}</span>kph</div>
            </div>
            <div class="data-container">
                <div class="container-heading">Humidity:</div>
                <div class="container-text"><span>${data.current.humidity}</span>%</div>
            </div>
            <div class="data-container">
                <div class="container-heading">Cloud:</div>
                <div class="container-text"><span>${data.current.cloud}</span>%</div>
            </div>
             <div class="data-container">
                <div class="container-heading">Feels like(in °C):</div>
                <div class="container-text"><span>${data.current.feelslike_c}</span>°C</div>
            </div>
             <div class="data-container">
                <div class="container-heading">Feels like(in °F):</div>
                <div class="container-text"><span>${data.current.feelslike_f}</span>°F</div>
            </div>
            <div class="data-container">
                <div class="container-heading">Chance of Rain:</div>
                <div class="container-text"><span>${data.current.chance_of_rain}</span>%</div>
            </div>
            <div class="data-container">
                <div class="container-heading">UV:</div>
                <div class="container-text"><span>${data.current.uv}</span></div>
            </div>
            <div class="data-container">
                <div class="container-heading">Precipitation(in mm):</div>
                <div class="container-text"><span>${data.current.precip_mm}</span></div>
            </div>

        </div>
        `

        } catch (error) {
            console.log(`${error}`)
        }
    }

searchBtn.addEventListener('click', ()=>{
   const geoLocation = searchInput.value
    fetchWeather(geoLocation)
})
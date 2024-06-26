import './App.css'
import React, {useEffect, useState} from "react";
import Moonphase from "./component/Moonphase.tsx";
import Description from "./component/Description.tsx";
import Icon from "./component/Icon.tsx";

function App() {

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherData>();
    const weatherAPIKey = "G7LNKP4CHGHHJZFTYXQ3XZJQY";


    // read the docs from visual Weather API and implement the Recommantion on what to wear, use feelslike and other parameters
    //fetch weather data
    function fetchWeatherData() {
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&iconSet=icons2&elements=datetime%2CdatetimeEpoch%2Cname%2Cfeelslike%2Caddress%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cprecip%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cuvindex%2Csunrise%2Csunset%2Cmoonphase%2Cconditions%2Cicon%2Cdescription&include=hours%2Ccurrent%2Cevents&key=${weatherAPIKey}&contentType=json&lang=de`, {
            "method": "GET",
            "headers": {}
        })
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(err => {
                console.error("Error: ", err);
            });
    }

    useEffect(() => {
        // Check if geolocation is supported by the browser
        if ("geolocation" in navigator) {
            // Prompt user for permission to access their location
            navigator.geolocation.getCurrentPosition(
                // Success callback function
                (position) => {
                    // Get the user's latitude and longitude coordinates
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lng + '&localityLanguage=de')
                        .then(response => response.json())
                        .then(data => setCity(data.city))
                },
                // Error callback function
                (error) => {
                    // Handle errors, e.g. user denied location sharing permissions
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCity(event.target.value)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="text-center">
                    <Icon />
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">{weatherData?.currentConditions.temp}</h1>
                    <p className="text-2xl text-gray-600">{weatherData?.currentConditions.conditions}</p>
                    <Description weatherData={weatherData}/>
                    <></>
                    <div className={"flex justify-between"}>
                        <input onChange={handleChange} onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                fetchWeatherData()
                            }
                        }} type="text" placeholder="Type in Location"
                               className="input input-bordered w-full max-w-[200px]" value={city}/>
                        <button className="btn-circle btn-ghost bg-gray-100 ml-[15px]" onClick={fetchWeatherData}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search">
                                <path
                                    d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
                            </svg>
                        </button>
                        <Moonphase moonphase={weatherData?.currentConditions.moonphase} />
                    </div>
                </div>
            </div>
        </>
    )
}



export interface WeatherData {
    currentConditions: {
        temp: number,
        humidity: number,
        precipprob: number,
        precibtype: [Precib],
        windspeed: number,
        uvindex: number,
        sunrise: string,
        sunset: string,
        moonphase: number,
        datetime: string,
        conditions: string,
        cloudcover: number,
        icon: string,
        feelslike: number,
    }
    days: [
        {
        tempmax: number,
        tempmin: number,
        description: string,
        }
    ]
}


type Precib = "rain" | "snow" | "freezingrain" | "ice"

export default App

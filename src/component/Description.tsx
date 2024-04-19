import {WeatherData} from "../App.tsx";
import {useEffect, useState} from "react";

const Description = (props: { weatherData: WeatherData | undefined }) => {

    const uvIndex = useState<string>("")

    useEffect(() => {
            if (props.weatherData) {
                switch (props.weatherData.currentConditions.uvindex) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        uvIndex[1]("Kein Schutz erforderlich.");
                        break;
                    case 3:
                        uvIndex[1]("T-Shirt und Sonnenbrille.");
                        break;
                    case 4:
                    case 5:
                        uvIndex[1]("T-Shirt, milde Sonnencreme und Sonnenbrille.");
                        break;
                    case 6:
                    case 7:
                    case 8:
                        uvIndex[1]("Intensive Sonnencreme, Sonnenbrille und Kopfbedeckung.");
                        break;
                    case 9:
                    case 10:
                        uvIndex[1]("Schützen vor der Sonne mit allen verfügbaren Mitteln.");
                        break;
                    default:
                        uvIndex[1]("Es wird dringend empfohlen, sich vor der Sonne zu schützen.");
                        break;
                }
            }
        }
        , [props.weatherData, uvIndex])

    return (
        <div>
            <p>
                {props.weatherData?.days[0].description}
            </p>
            <h6>
                {`${uvIndex[0]} Temperatur fühlt sich an wie ${props.weatherData?.currentConditions.feelslike}°C.`}
            </h6>
        </div>
    );
}

export default Description;


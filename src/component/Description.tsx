import {WeatherData} from "../App.tsx";
import {useEffect, useState} from "react";

const Description = (props: { weatherData: WeatherData | undefined }) => {

    const [uvIndex, setUvIndex] = useState<string>("")

    useEffect(() => {
        if (props.weatherData) {

            switch (props.weatherData.currentConditions.uvindex) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    setUvIndex("Kein Schutz erforderlich.");
                    break;
                case 3:
                    setUvIndex("T-Shirt und Sonnenbrille.");
                    break;
                case 4:
                case 5:
                    setUvIndex("T-Shirt, milde Sonnencreme und Sonnenbrille.");
                    break;
                case 6:
                case 7:
                case 8:
                    setUvIndex("Intensive Sonnencreme, Sonnenbrille und Kopfbedeckung.");
                    break;
                case 9:
                case 10:
                    setUvIndex("Schützen vor der Sonne mit allen verfügbaren Mitteln.");
                    break;
                default:
                    setUvIndex("Es wird dringend empfohlen, sich vor der Sonne zu schützen.");
                    break;
            }
        }
    }, [props.weatherData]);

    return (
        <div>
            <p>
                {props.weatherData?.days[0].description}
            </p>
            <h6>
                {`${uvIndex} Temperatur fühlt sich an wie ${props.weatherData?.currentConditions.feelslike}°C.`}
            </h6>
        </div>
    );
}

export default Description;
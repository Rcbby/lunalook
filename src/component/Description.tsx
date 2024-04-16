import {WeatherData} from "../App.tsx";

const Description = (props: { weatherData: WeatherData | undefined}) => {

if (props.weatherData !== undefined) {
    console.log("not undefined")
}

  return (
    <div>
      <p>
          {props.weatherData?.days[0].description}
      </p>
    </div>
  );
}

export default Description;
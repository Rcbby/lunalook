import {WeatherData} from "../App.tsx";

const Description = (props: { weatherData: WeatherData | undefined}) => {

console.log(props.weatherData?.currentConditions);

  return (
    <div>
      <p>
          {props.weatherData?.days[0].description}
      </p>
    </div>
  );
}

export default Description;
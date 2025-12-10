import type { WeatherResponse } from "./WeatherSummary";

type WeatherHeaderType = {
  weather: WeatherResponse;
};

const WeatherHeader = ({ weather }: WeatherHeaderType) => {
  return (
    <div>
      <p>This is the demo header</p>
      <p>Weather country from the header is: {weather.location.country}</p>
    </div>
  );
};

export { WeatherHeader };

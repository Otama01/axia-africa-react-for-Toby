import { useEffect, useState } from "react";
import { WeatherSummary, type WeatherResponse } from "./WeatherSummary";

const WeatherComponent = () => {
  const [weather, setWeather] = useState<WeatherResponse | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const generateUrl = (state: string) => {
      return `http://api.weatherapi.com/v1/current.json?key=00c200e359e0413493c172048250112&q=${state}&aqi=no`;
    };

    const getSTateWeatherAsyncAwaitMethod = async () => {
      try {
        const res = await fetch(generateUrl("Abuja"));
        const data: WeatherResponse = await res.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        console.log("THIS WILL ALWAYS RUN REGARDLESS OF THE STATUS");
      }
    };
    getSTateWeatherAsyncAwaitMethod();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!weather) {
    return;
  }

  return <WeatherSummary weather={weather} />;
};

export { WeatherComponent };

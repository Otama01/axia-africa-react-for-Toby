import { create } from "zustand";
import type { WeatherResponse } from "../types";
import axios from "axios";
type WeatherStoreType = {
  isLoading: boolean;
  weatherDetails: WeatherResponse | undefined;
  fetchWeatherDetails: () => Promise<void>;
};
const initialState = {
  weatherDetails: undefined,
  isLoading: false,
};
export const useWeatherStore = create<WeatherStoreType>((set) => ({
  ...initialState,
  fetchWeatherDetails: async () => {
    const generateUrl = (state: string) => {
      return `http://api.weatherapi.com/v1/current.json?key=00c200e359e0413493c172048250112&q=${state}&aqi=no`;
    };
    try {
      const { data: weatherDetails } = await axios.get<WeatherResponse>(
        generateUrl("Abuja")
      );
      console.log(weatherDetails, "data returned from api call");
      set({ weatherDetails });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("THIS WILL ALWAYS RUN REGARDLESS OF THE STATUS");
    }
  },
}));

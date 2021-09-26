import axios from "axios";
import { Weather } from "../models/apiUtils";

export async function getWeatherDetails(city = "delhi") {
  const response = await axios.get<Weather>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5823e9e2ea703a25fd4ef33f5f2cff8d`
  );
  return response?.data;
}

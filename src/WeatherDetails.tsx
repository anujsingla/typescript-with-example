import { useState } from "react";
import { Weather } from "./models/apiUtils";
import { getWeatherDetails } from "./utils/apiUtils";

export function WeatherDetails() {
  const [inputValue, setInputValue] = useState<string>("");
  const [weatherDetails, setWeatherDetails] = useState<Weather>();

  const fetchWeatherData = async () => {
    const data = await getWeatherDetails(inputValue);
    console.log(data);
    setWeatherDetails(data);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e?.target?.value)}
        value={inputValue}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
      <div>
        Weather Details
        <div>{weatherDetails?.sys?.country ?? "No Data found"}</div>
        <div>{weatherDetails?.name ?? "No Data found"}</div>
      </div>
    </div>
  );
}

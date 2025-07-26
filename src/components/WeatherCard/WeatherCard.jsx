import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}{" "}
        &deg; {currentTemperatureUnit}
      </p>
      <img src={sunny} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;

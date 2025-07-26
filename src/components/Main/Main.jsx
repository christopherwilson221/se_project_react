import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit.js";

function Main({ weatherData, openCardClick, clothingItems }) {
  console.log("weatherData:", weatherData);
  console.log("weatherData.type:", weatherData.type);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}{" "}
        &deg; {currentTemperatureUnit}/ you may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item, index) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={openCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

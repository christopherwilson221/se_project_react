import { createContext } from "react";

const CurrentTemperatureUnitContext = createContext();

export const currentTemperatureUnit = ({ currentTemperatureUnit }) => {
  return (
    <CurrentTemperatureUnitContext.Provider value={currentTemperatureUnit}>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default CurrentTemperatureUnitContext;
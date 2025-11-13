import { createContext } from "react";

const CurrentTemperatureUnitContext = createContext();

export const CurrentUserContext = ({ currentUser }) => {
  return (
    <CurrentTemperatureUnitContext.Provider value={currentUser}>
      <div className="page">
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default CurrentTemperatureUnitContext;
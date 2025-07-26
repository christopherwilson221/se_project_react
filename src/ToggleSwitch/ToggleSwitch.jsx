import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/currentTemperatureUnit";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label class="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__circle"></span>
      <span className={`toggle-switch__F toggle-switch__text ${
        currentTemperatureUnit === "F"
        ? "toggle-switch__text_color_white" 
        : ""
      }`}>F</span>
      <span className={`toggle-switch__C toggle-switch__text ${
        currentTemperatureUnit === "C"
        ? "toggle-switch__text_color_white" 
        : ""
      }`}>C</span>
    </label>
  );
}

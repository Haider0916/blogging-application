import React from "react";
import "./toggleSwitch.css";
import {useTheme} from "../../contexts/appContext.js"

function ToggleSwitch() {

  const [{checked},dispatch] = useTheme();

  return (
    <label className="toggleSwitch">
      <input type="checkbox" checked={checked} onChange={() => dispatch({type:"CHANGE_THEME"})} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;
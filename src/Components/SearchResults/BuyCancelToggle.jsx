import React, { useEffect, useState } from "react";
import "./searchResultsRow.css";
const ToggleButton = ({ toShow, buttonShowFunc }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [toggleText, setToggleText] = useState(toShow ? "BUY" : "CANCEL");
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    buttonShowFunc(isHidden);
  };
  useEffect(() => {
    toggleVisibility();
  });
  return <button id="buycanceltoggle"> {toggleText} </button>;
};
export default ToggleButton;

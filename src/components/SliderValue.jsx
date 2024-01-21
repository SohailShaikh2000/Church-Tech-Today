import React, { useState, createContext } from "react";

const SliderValueContext = createContext({
  sliderValue: [],
  setSliderValue: (setSliderValue) => {},
});

export function SliderValueProvider(props) {
  const [sliderValue, setSliderValue] = useState([]);
  function setSliderValueHandler(data) {
    setSliderValue(data);
  }

  const context = {
    sliderValue: sliderValue,
    setSliderValue: setSliderValueHandler,
  };

  return (
    <SliderValueContext.Provider value={context}>
      {props.children}
    </SliderValueContext.Provider>
  );
}

export default SliderValueContext;

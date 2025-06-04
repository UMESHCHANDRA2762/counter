import React, { useState, useEffect } from "react";
import useCounterStore from "./useCounterStore";
import "./App.css";
function Counter() {
  const count = useCounterStore((state) => state.count);
  const storeStep = useCounterStore((state) => state.step);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const setStoreStep = useCounterStore((state) => state.setStep);

  const [inputValue, setInputValue] = useState(
    storeStep !== undefined ? storeStep.toString() : "1"
  );

  useEffect(() => {
    if (storeStep !== undefined) {
      setInputValue(storeStep.toString());
    } else {
      setInputValue("1");
    }
  }, [storeStep]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const newStep = parseInt(inputValue, 10);
    if (!isNaN(newStep) && newStep > 0) {
      setStoreStep(newStep);
    } else {
      setStoreStep(1);
      setInputValue("1");
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
      e.target.blur();
    }
  };

  return (
    <>
      <div className="app-container">
        <h1 className="counter-title">Counter</h1>
        <div className="count-display">{count}</div>

        <div className="step-input-container">
          <label htmlFor="stepInput">Step Value</label>
          <input
            type="number"
            id="stepInput"
            className="step-input"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
            min="1"
            aria-labelledby="stepInputLabel"
          />
        </div>

        <div className="buttons-container">
          <button
            onClick={decrement}
            className="button op-button"
            aria-label={`Decrement count by ${storeStep}`}
          >
            -
          </button>
          <button
            onClick={increment}
            className="button op-button"
            aria-label={`Increment count by ${storeStep}`}
          >
            +
          </button>
        </div>
        <button
          onClick={reset}
          className="button reset-button"
          aria-label="Reset count and step"
        >
          Reset
        </button>
        <p className="footer-text">Simple Counter</p>
      </div>
    </>
  );
}
export default Counter;

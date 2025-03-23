import { useEffect, useState } from "react";

// we are using 'react-select' library to make using selections with react a bit smoother and easier
// documentation here: https://react-select.com/
import Select from "react-select";

// take note that all of the functionality of the Converter has been isolated from the visualization
// this is making the Converter a bit easier to read
// also good naming convention is to tell what the function does instead of telling what it returns

import handleCurrencyResponse from "../lib/handleCurrencyResponse";
import handleCalculate from "../lib/handleCalculate";
import parseTextInput from "../lib/parseAmounttInput";

function Converter() {
  // we save values to the Converter component's state with the useState functions
  // hint: first three are the ones that you need to pass to the POST function
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();
  const [amountInput, setAmountInput] = useState(0);
  const [result, setResult] = useState();

  // useEffect function with [] gets triggered only on the initial render
  // handleCurrencyResponse take the setCurrencies function as a parameter
  // so when it's finished loading, it saves the currencies to the useState
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    handleCurrencyResponse(setCurrencies);
  }, []);

  if (currencies.length === 0) {
    // when waiting on currencies to load through api, let's show loading screen
    return (
      <div className="App">
        <h1>VJP Currency converter</h1>
        <p>Loading...</p>
      </div>
    );
  }

  // on all other occasions let's show the actual calculator
  return (
    <>
      <div className="flex-container">
        <div className="dropdown-box">
          <div className="label">From</div>
          <Select
            options={currencies}
            onChange={(fromVal) => setFromValue(fromVal)}
          />
        </div>
        <div className="dropdown-box">
          <div className="label">To</div>
          <Select
            options={currencies}
            onChange={(toVal) => setToValue(toVal)}
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="number-input">
          <div className="label">Value</div>
          <input
            type="text"
            defaultValue={0}
            onChange={(ev) => setAmountInput(parseTextInput(ev.target.value))}
          ></input>
        </div>
        <div className="number-input">
          <div className="label">Result</div>
          <div className="result">{result}</div>
        </div>
      </div>
      <div className="flex-container">
        <button
          className="calculate-button"
          onClick={async () => {
            handleCalculate(setResult, fromValue, toValue, amountInput);
          }}
        >
          Calculate
        </button>
      </div>
      {/*
       * TASK5: (2p)
       *
       * Remove the debug screen before returning the assignment
       *
       * Here's a debug screen to show you the actual values.
       * It might be helpful. Delete all traces of it when finished.
       *
       */}
      <hr />
      <h2>Debug (remove when finished)</h2>
      <br />
      fromDropdown: {JSON.stringify(fromValue)}
      <br />
      toDropdown: {JSON.stringify(toValue)}
      <br />
      amountInput: {amountInput}
      <br />
      result: {result}
    </>
  );
}

export default Converter;

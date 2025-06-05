import React from 'react';
import Converter from "./components/Converter";
import AvailableCurrencies from "./components/AvailableCurrencies";

function App() {
  return (
    <div className="App">
      <h1>VJP Currency converter</h1>

      <Converter />
      <AvailableCurrencies />

      <div>
        <h1>
          added document to the project
        </h1>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

// käytämme react-select -kirjastoa valintakenttien käyttämiseen
// dokumentaatio täällä: https://react-select.com/
import Select from "react-select";

// huomioi, että kaikki Converterin toiminta on eristetty näkyvästä koodista
// tämä tekee Converterin koodista helpommin luettavavaa
// hyvä käytäntö on nimetä funktioita sen mukaan, mitä ne tekevät, eikä mitä ne palauttavat

import handleCurrencyResponse from "../lib/handleCurrencyResponse";
import handleCalculate from "../lib/handleCalculate";
import parseTextInput from "../lib/parseAmounttInput";

function Converter() {
  // käytämme useState -funktioita Converterin tilan säilyttämiseen
  // vinkki: tarvitset ensimmäistä kolmea POST -funktiossasi

  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();
  const [amountInput, setAmountInput] = useState(0);
  const [result, setResult] = useState();

  // useEffect -funktio tyhjän [] taulukon kanssa suoritetaan vain ensimmäisellä renderöinnillä
  // handleCurrencyResponse ottaa setCurrencies -funktion parametrina
  // kun se on valmis, se tallentaa valuutat useState:iin
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    handleCurrencyResponse(setCurrencies);
  }, []);

  if (currencies.length === 0) {
    // näytetään latausnäyttö, kun valuutat vielä latautuvat

    return (
      <div className="App">
        <h1>VJP Currency converter</h1>
        <p>Loading...</p>
      </div>
    );
  }

  // kaikissa muissa tapauksissa näytetään laskin
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
            value={amountInput}
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
          disabled={!fromValue || !toValue || !amountInput}
        >
          Calculate
        </button>
      </div>
      {/*
       * Tehtävä 5: (5p)
       *
       * Viimeistele tehtävä poistamalla tämä debuggeri.
       *
       * Siitä saattaa olla hyötyä sinulle tehtävän ratkaisemisessa,
       * mutta loppukäyttäjälle se ei ole tarpeen.
       *
       * Poista siis debuggeri, kun olet valmis.
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

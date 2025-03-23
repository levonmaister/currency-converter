async function handleCurrencyResponse(setCurrencies) {
  try {
    const response = await fetch("https://currency-api.vjp.wtf/currencies");

    if (!response.ok) {
      throw new Error(`HTTP virhe! status: ${response.status}`);
    }
    const data = await response.json();
    const rawCurrencies = data.currencies;
    
    const parsedCurrencies = rawCurrencies.map((cur) => {
      return { value: cur.abbreviation, label: cur.name };
    });

    setCurrencies(parsedCurrencies);
  } catch (error) {
    console.error("Virhe valuuttojen hakemisessa:", error);
    setCurrencies([]);
  }
}

export default handleCurrencyResponse;

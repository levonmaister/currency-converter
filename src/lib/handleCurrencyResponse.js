async function handleCurrencyResponse(setCurrencies) {
  try {
    const res = await fetch("https://currency-api.vjp.wtf/currencies");

    if (!res.ok) {
      throw new Error(`HTTP virhe! status: ${res.status}`);
    }
    const data = await res.json();
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

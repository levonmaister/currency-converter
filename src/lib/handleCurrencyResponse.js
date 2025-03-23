async function handleCurrencyResponse(setCurrencies) {
  const rawCurrencies = await fetch(
    "https://currency-api.vjp.wtf/currencies"
  ).then((res) => res.json().then((res) => res.currencies));
  const parsedCurrencies = rawCurrencies.map((cur) => {
    return { value: cur.abbreviation, label: cur.name };
  });
  setCurrencies(parsedCurrencies);
}

export default handleCurrencyResponse;

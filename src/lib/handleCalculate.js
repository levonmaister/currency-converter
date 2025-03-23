/*
 * Tehtävä 2: (22p)
 *
 * Formalisoi handleCalculate() -funktio toimimaan oikein.
 *
 * API dokumentaatio löytyy A+:sta: https://plus.cs.aalto.fi/cs-c1180/2025/module11/viikkotehtava/
 *
 * Funktio ottaa tällä hetkellä vain setResult -parametrin,
 * mutta olisi hyödyllistä, jos se saisi myös muita parametreja..
 *
 */

async function handleCalculate(setResult) {
  try {
    const res = await fetch("https://currency-api.vjp.wtf/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // tästä puuttuu nyt jotain...
      }),
    });

    const status = res.status;

    if (status === 200) {
      console.log("Yay ok!");
    } else {
      console.log(
        "Hmm.. Something's off since the status is " +
          status +
          ". Maybe it's a good idea to open inspector's network tab. 🧙🏼‍♂️"
      );
    }

    // JSON parsitaan tässä
    const data = await res.json();
    console.log(data);

    /*
     *
     * Vähän niinkuin catch, kohdassa, tässä halutaan käyttää
     * setResult() -funktiota, jotta saadaan vastaus
     * käyttäjälle.
     */

    setResult("Result!");
  } catch (error) {
    // jos fetch ei onnistu, palautetaan -1
    console.log(error);
    setTimeout(() => setResult(-1), 1000);
  }
}

export default handleCalculate;

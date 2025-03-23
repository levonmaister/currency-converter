/*
 * TASK2: (9p)
 *
 * Formalize the handleCalculate() function to work properly.
 *
 * API documentation can be found form A+
 *
 * The function currently takes only setResult as a parameter,
 * but it would be useful to have more parameters in there..
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
        // we're missing some information here..
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

    // parse the JSON
    const data = await res.json();
    console.log(data);

    /*
     * note that just like on the catch, we want to use setResult()
     * to save the response instead of returning the function
     */

    setResult("Result!");
  } catch (error) {
    // if (and when) the fetch fails, we end here and
    console.log(error);
    setTimeout(() => setResult(new Date().getSeconds()), 1000);
  }

  // for now, we respond with current seconds.
}

export default handleCalculate;

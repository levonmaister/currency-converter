/*
 * Tehtävä 1: (10p)
 *
 * Varmista, että käyttäjä syöttää vain numeroita.
 * Käytä alert() -funktiota ilmoittaaksesi
 * virheellisesti syötetystä arvosta ja palauta 0,
 * jos syöte ei ole numero. Jos suote on tyhjä,
 * voit palauttaa tyhjän stringin.
 * 
 * maybe_number_maybe_not saattaa olle stringi
 * mutta funktion oletetaan palauttavan numero
 * tai tyhjä string.
 *
 */


function parseAmountInput(maybe_number_maybe_not) {

  if (maybe_number_maybe_not == "") {
    return "";
  }
  
  if (isNaN(maybe_number_maybe_not)) {
    alert("Enter number");
    return 0;
  }


  return maybe_number_maybe_not;
}

export default parseAmountInput;

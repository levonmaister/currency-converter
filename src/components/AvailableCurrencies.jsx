/*
Tehtävä 4: (25p)

Nyt on aika käyttää kaikkea oppimaasi ja tehdä jotain vähän itsenäisemmin!

Tee komponentti, joka hakee kaikki valuutat ja symbolit API:sta ja renderöi ne.
On myös ihan fiksua, mutta ei pakollista tehdä erilliset ListComponent ja ItemComponent -komponentit.
Voit myös luoda niille kokonaan uudet tiedostot.

Saat itse päättää, miten haluat näyttää komponentit, mutta tässä ehkä kannattaisi käyttää
jotakin taulukkohenkistä formaattia. Ehkä jopa CSS gridiä? Flexbox toimii myös hyvin.

Käytä ihmeessä myös CSS:ää ja muista "className" "class":in sijasta. Inline-CSS on myös OK

Hyvä vinkki on katsoa mallia, miten kutsumme APIa toisissa komponenteissa.

Muista kysellä apua, jos jäät jumiin!

*/

import React, { useEffect, useState } from "react";
import handleCurrencyResponse2 from "../lib/handleCurrencyResponse2";




 function AvailableCurrenciesList () {

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    handleCurrencyResponse2(setCurrencies);
  }, []);

  return (
    <div>
    <div  className="list" >
      {currencies.map((valuta) => (
        <div key ={valuta.symbol} className="list-item">
          <div className="currency">{valuta.symbol}</div>
          <div className="currency">{valuta.value}</div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default AvailableCurrenciesList;
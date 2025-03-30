# Tehtäväkierros 11 - React Currency Converter

## Omat tiedot tähän

### Nimi
Levon Lopez-Eknosyan
### Opiskelijanumero
101755869
### Mitkä asiat teit

Teitkö jotain puutteellisesti? Mitä jätit tekemättä?

Jag gjorde allting som stod i instruktionerna. Stylandet av VJP currency convertern gjorde jag lite halvfärdigt. Ändrade ändast färgen på Calculate knappen. Och AvailableCurrency har inte heller någon komplicerad styling vid sidan om att de är centrerade i mitten med flexbox samt en bold style. 


### Mikä tehtävässä oli haastavaa?

Allting var ganska lätt egentligen, försökte få chakraUI att fungera men gav opp efter en halvtimme för den ville inte fungera. Sedan försökte jag göra någonting med Aria men det blev inte heller till någonting så till slut använde jag mig bara av vanlig css.

### Mitä opit?

Lite grann om ChakraUI, fick det dock inte att fungera.

### Paljonko käytit tunteja kierrokseen?

Arvio tunnin tarkkuudella riittää.

2h

## Tehtävänanto

Toteuta Reactilla yksinkertainen valuuttamuunnin.

Tarkemmat ohjeet ja kriteerit löytyvät A+:sta. Kommentit koodissa auttavat sinut alkuun.

Lyhyesti:

1. sanitoi input parseAmountInput.js -funktiossa 10p
2. handleCalculate.js -funktio toimii oikein 22p
3. tee sivustosta tyylikkäämpi 13p
4. toteuta ja kutsu <AvailableCurrencies> komponenttia joka hakee rajapinnasta tiedot ja näyttää currencyt ja symbolit 25p
5. Poista koodista debug kun et tarvitse sitä enää 5p

[A+ tehtävänanto](https://plus.cs.aalto.fi/cs-c1180/2025/module11/viikkotehtava/)

## Scriptit

Package.json on ystävä, mutta käydään scriptit tässä vielä läpi erikseen

### `npm install`

Asentaa kaikki tarvittavat riippuvuudet ja luo node_modules -kansion. Tämä tulee ajaa ennen kuin aloitat sovelluksen kehittämisen.

### `npm run dev`

Käynnistää sovelluksen kehitystilan ja serverin. Avaa [http://localhost:5173](http://localhost:5173) selaimessasi tarkastellaksesi muutoksia.

**Huom!** Live Server ei toimi tässä projektissa, sillä se yrittää tarjota selaimelle suoraan esimerkiksi .jsx-tiedostoja, joita selain ei osaa lukea. Käytä siis aina `npm start` -komentoa.

### `npm run build`

Jos olisit rakentamassa sovelluksen tuotantoversiota, voit katsoa mitä tämä komento tekee. Se paketoi sovelluksen ja optimoi sen parhaan suorituskyvyn saavuttamiseksi.

Se luo `dist` -nimisen kansioon johon kaikki koodi paketoidaan index.html ja muihin tarvittaviin tiedostoihin. Tämä olisi esimerkiksi valmis siirrettäväksi Cyberduckilla Aallon palvelimelle.

Lisää ohjeita [täällä](https://vite.dev/guide/build.html#building-for-production)

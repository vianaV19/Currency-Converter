<<<<<<< HEAD
import HTTP from "./http.mjs";

=======
const HTTP = require('./http.mts');

const currencies = document.getElementById('currencies') as HTMLElement
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68
const result = document.getElementById('result') as HTMLElement
const selectCurrencyFrom = document.getElementById('select-currency-from') as HTMLSelectElement
const selectCurrencyTo = document.getElementById('select-currency-to') as HTMLSelectElement
const amount = document.getElementById('amount') as HTMLInputElement
<<<<<<< HEAD
const apiKey:string = "qRzaz1ZwZAXUA5nZ5WCd3nVIavGTbZEv";
const BASE_URL:string = 'https://api.apilayer.com/currency_data'
const convertBtn = document.getElementById('convertBtn') as HTMLButtonElement

setDropdownSymbols();

convertBtn.addEventListener('click', () => {    
    convert();
})
=======
const apiKey:string = "";

loadSymbols();
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68

//currency convert function
async function convert() {

    let cs: any = await HTTP.get({
        method: 'GET',
<<<<<<< HEAD
        url: `${BASE_URL}/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
        apiKey: apiKey
    });

    let symbol = selectCurrencyTo.value;

    result.textContent =  symbol +" "+ cs.result

}

//add symbol into select element
async function setDropdownSymbols() {
=======
        url: `https://api.apilayer.com/currency_data/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
        apiKey: apiKey
    });

    result.textContent = cs.result

}

async function loadSymbols() {
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68

    //XMLHTTPRequest all currencies available
    let cs: any = await HTTP.get({
        method: 'GET',
<<<<<<< HEAD
        url: `${BASE_URL}/list`,
        apiKey: apiKey
    });

=======
        url: `https://api.apilayer.com/currency_data/list`,
        apiKey: apiKey
    });

    console.log(cs)

>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68
    //setting currencies as option
    let currenciesArr = Object.keys(cs.currencies);

    //appeding currency option element to select
<<<<<<< HEAD
    for(let e of currenciesArr){
        let optionFrom = document.createElement("option")

        optionFrom.value = e
        optionFrom.textContent = e


        selectCurrencyFrom.append(optionFrom)

        let optionTo = optionFrom.cloneNode()
        optionTo.textContent = e;
        optionTo.nodeValue = e;
        
        selectCurrencyTo.append(optionTo)
    }
  
=======
    currenciesArr.forEach(e => {

        let option = document.createElement("option")

        option.value = e
        option.textContent = e

        selectCurrencyFrom.appendChild(option)
    })

    currenciesArr.forEach(e => {

        let option = document.createElement("option")

        option.value = e
        option.textContent = e

        selectCurrencyTo.appendChild(option)

    })
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68
}
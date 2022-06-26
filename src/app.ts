const HTTP = require('./http.mts');

const currencies = document.getElementById('currencies') as HTMLElement
const result = document.getElementById('result') as HTMLElement
const selectCurrencyFrom = document.getElementById('select-currency-from') as HTMLSelectElement
const selectCurrencyTo = document.getElementById('select-currency-to') as HTMLSelectElement
const amount = document.getElementById('amount') as HTMLInputElement
const apiKey:string = "";

loadSymbols();

//currency convert function
async function convert() {

    let cs: any = await HTTP.get({
        method: 'GET',
        url: `https://api.apilayer.com/currency_data/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
        apiKey: apiKey
    });

    result.textContent = cs.result

}

async function loadSymbols() {

    //XMLHTTPRequest all currencies available
    let cs: any = await HTTP.get({
        method: 'GET',
        url: `https://api.apilayer.com/currency_data/list`,
        apiKey: apiKey
    });

    console.log(cs)

    //setting currencies as option
    let currenciesArr = Object.keys(cs.currencies);

    //appeding currency option element to select
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
}
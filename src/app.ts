import HTTP from "./http.mjs";

const result = document.getElementById('result') as HTMLElement
const selectCurrencyFrom = document.getElementById('select-currency-from') as HTMLSelectElement
const selectCurrencyTo = document.getElementById('select-currency-to') as HTMLSelectElement
const amount = document.getElementById('amount') as HTMLInputElement
const apiKey:string = "qRzaz1ZwZAXUA5nZ5WCd3nVIavGTbZEv";
const BASE_URL:string = 'https://api.apilayer.com/currency_data'
const convertBtn = document.getElementById('convertBtn') as HTMLButtonElement

setDropdownSymbols();

convertBtn.addEventListener('click', () => {    
    convert();
})

//currency convert function
async function convert() {

    let cs: any = await HTTP.get({
        method: 'GET',
        url: `${BASE_URL}/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
        apiKey: apiKey
    });

    let symbol = selectCurrencyTo.value;

    result.textContent =  symbol +" "+ cs.result

}

//add symbol into select element
async function setDropdownSymbols() {

    //XMLHTTPRequest all currencies available
    let cs: any = await HTTP.get({
        method: 'GET',
        url: `${BASE_URL}/list`,
        apiKey: apiKey
    });

    //setting currencies as option
    let currenciesArr = Object.keys(cs.currencies);

    //appeding currency option element to select
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
  
}
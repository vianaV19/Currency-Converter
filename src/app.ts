const currencies = document.getElementById('currencies') as HTMLElement
const result = document.getElementById('result') as HTMLElement
<<<<<<< HEAD
const selectCurrencyFrom = document.getElementById('select-currency-from') as HTMLSelectElement
const selectCurrencyTo = document.getElementById('select-currency-to') as HTMLSelectElement
const amount = document.getElementById('amount') as HTMLInputElement

const apiKey:string ;

=======
const apiKey:string;//your apiKey
>>>>>>> 02ebe373453b28f5125259ba19fff66946ade6fb

class HTTP {
    static async get({ url = '', method = '', apiKey = null as any }) {
        return new Promise((resolve, rejects) => {
            let request = new XMLHttpRequest();

            request.open(method, url, true);

<<<<<<< HEAD
            if (apiKey) request.setRequestHeader("apikey", apiKey)

=======
            request.setRequestHeader("apikey", apiKey)
>>>>>>> 02ebe373453b28f5125259ba19fff66946ade6fb

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {

                    console.log(`GET ${url}: Success!`)

                    resolve(JSON.parse(request.responseText));
                } else {
                    rejects({
                        status: request.status,
                        statusText: request.statusText
                    })
                }
            }

            request.onerror = () => {
                rejects({
                    status: request.status,
                    statusText: request.statusText
                })
            }

            request.send();
        })
    }
}

// loadSymbols();

//currency convert function
async function convert() {

    result.textContent = '3.232';

    //     let cs:any = await HTTP.get({
    //         method: 'GET',
    //         url: `https://api.apilayer.com/currency_data/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
    //         apiKey: apiKey
    //     });

    //     result.textContent = cs.result
    // }
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
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const currencies = document.getElementById('currencies');
const result = document.getElementById('result');
<<<<<<< HEAD
const selectCurrencyFrom = document.getElementById('select-currency-from');
const selectCurrencyTo = document.getElementById('select-currency-to');
const amount = document.getElementById('amount');
const apiKey;
=======
const apiKey;
>>>>>>> 02ebe373453b28f5125259ba19fff66946ade6fb
class HTTP {
    static get({ url = '', method = '', apiKey = null }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                let request = new XMLHttpRequest();
                request.open(method, url, true);
<<<<<<< HEAD
                if (apiKey)
                    request.setRequestHeader("apikey", apiKey);
=======
                request.setRequestHeader("apikey", apiKey);
>>>>>>> 02ebe373453b28f5125259ba19fff66946ade6fb
                request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
                        console.log(`GET ${url}: Success!`);
                        resolve(JSON.parse(request.responseText));
                    }
                    else {
                        rejects({
                            status: request.status,
                            statusText: request.statusText
                        });
                    }
                };
                request.onerror = () => {
                    rejects({
                        status: request.status,
                        statusText: request.statusText
                    });
                };
                request.send();
            });
        });
    }
}
// loadSymbols();
//currency convert function
function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        result.textContent = '3.232';
        //     let cs:any = await HTTP.get({
        //         method: 'GET',
        //         url: `https://api.apilayer.com/currency_data/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
        //         apiKey: apiKey
        //     });
        //     result.textContent = cs.result
        // }
    });
}
function loadSymbols() {
    return __awaiter(this, void 0, void 0, function* () {
        //XMLHTTPRequest all currencies available
        let cs = yield HTTP.get({
            method: 'GET',
            url: `https://api.apilayer.com/currency_data/list`,
            apiKey: apiKey
        });
        console.log(cs);
        //setting currencies as option
        let currenciesArr = Object.keys(cs.currencies);
        //appeding currency option element to select
        currenciesArr.forEach(e => {
            let option = document.createElement("option");
            option.value = e;
            option.textContent = e;
            selectCurrencyFrom.appendChild(option);
        });
        currenciesArr.forEach(e => {
            let option = document.createElement("option");
            option.value = e;
            option.textContent = e;
            selectCurrencyTo.appendChild(option);
        });
    });
}

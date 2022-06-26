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
const HTTP = require('./http.mts');
const currencies = document.getElementById('currencies');
const result = document.getElementById('result');
const selectCurrencyFrom = document.getElementById('select-currency-from');
const selectCurrencyTo = document.getElementById('select-currency-to');
const amount = document.getElementById('amount');
const apiKey = "";
loadSymbols();
//currency convert function
function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        let cs = yield HTTP.get({
            method: 'GET',
            url: `https://api.apilayer.com/currency_data/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
            apiKey: apiKey
        });
        result.textContent = cs.result;
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

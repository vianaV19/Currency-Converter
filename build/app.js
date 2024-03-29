var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import HTTP from "./http.mjs";
const result = document.getElementById('result');
const selectCurrencyFrom = document.getElementById('select-currency-from');
const selectCurrencyTo = document.getElementById('select-currency-to');
const amount = document.getElementById('amount');
const apiKey = "qRzaz1ZwZAXUA5nZ5WCd3nVIavGTbZEv";
const BASE_URL = 'https://api.apilayer.com/currency_data';
const convertBtn = document.getElementById('convertBtn');
const symbol_from = document.getElementById('symbol-from');
const symbol_to = document.getElementById('symbol-to');
const amount_value = document.getElementById('amount-value');
setDropdownSymbols();
convertBtn.addEventListener('click', () => {
    convert();
});
selectCurrencyFrom.addEventListener('change', () => {
    update();
});
selectCurrencyTo.addEventListener('change', () => {
    update();
});
amount.addEventListener('keyup', () => {
    update();
});
function update() {
    let cf = selectCurrencyFrom.value;
    let ct = selectCurrencyTo.value;
    let cifra_f, cifra_t;
    switch (cf) {
        case 'BRL':
            cifra_f = "R$";
    }
    switch (ct) {
        case 'USD':
            cifra_t = "$";
    }
    symbol_from.innerHTML = cf == "" ? "NULL" : cf + ": " + cifra_f;
    symbol_to.innerHTML = ct == "" ? "NULL" : ct + ":" + cifra_t;
    amount_value.innerHTML = amount.value;
}
//currency convert function
function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        let cs = yield HTTP.get({
            method: 'GET',
            url: `${BASE_URL}/convert?from=${selectCurrencyFrom.value}&to=${selectCurrencyTo.value}&amount=${parseFloat(amount.value)}`,
            apiKey: apiKey
        });
        result.textContent = cs.result;
    });
}
//add symbol into select element
function setDropdownSymbols() {
    return __awaiter(this, void 0, void 0, function* () {
        // let cs:any = await HTTP.get({
        //     method: 'GET',
        //     url: `${BASE_URL}/list`,
        //     apiKey: apiKey
        // });
        // let currenciesArr = Object.keys(cs.currencies);
        // for (let e of currenciesArr) {
        //     let optionFrom = document.createElement("option")
        //     optionFrom.value = e
        //     optionFrom.textContent = e
        //     selectCurrencyFrom.append(optionFrom)
        //     let optionTo = optionFrom.cloneNode()
        //     optionTo.textContent = e;
        //     optionTo.nodeValue = e;
        //     selectCurrencyTo.append(optionTo)
        // }
    });
}

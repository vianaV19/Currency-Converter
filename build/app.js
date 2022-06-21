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
const apiKey = 'fc53f67dad7105913284';
class HTTP {
    static get({ url = '', method = '' }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                let request = new XMLHttpRequest();
                request.open(options.method, options.url, true);
                request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
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
const options = {
    method: 'GET',
    url: `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`
};
function getCurrencies() {
    return __awaiter(this, void 0, void 0, function* () {
        let cs = yield HTTP.get(options);
        return Object.values(cs.results);
    });
}
function listCurrencies() {
    getCurrencies().then(data => {
        console.log(data);
        for (const key in data) {
            currencies.innerHTML += `${data[key].currencyName} <br>`;
        }
    });
}
listCurrencies();

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
const apiKey = 'fc53f67dad7105913284';
class HTTP {
    static get({ url = '', method = '' }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                let request = new XMLHttpRequest();
                request.open(method, url, true);
                request.setRequestHeader("apikey", "Y7fG1N8jRu9kVezwNXuGVgQfsPrQHHkc");
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
function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        let cs = yield HTTP.get({
            method: 'GET',
            url: `https://api.apilayer.com/fixer/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01`
        });
        console.log(cs);
    });
}
function listCurrencies() {
    return __awaiter(this, void 0, void 0, function* () {
        let cs = yield HTTP.get({
            method: 'GET',
            url: `https://api.apilayer.com/fixer/symbols`
        });
        console.log(cs.symbols);
    });
}

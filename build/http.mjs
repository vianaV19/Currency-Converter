<<<<<<< HEAD
=======
"use strict";
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
<<<<<<< HEAD
export default class HTTP {
=======
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP = void 0;
class HTTP {
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68
    static get({ url = '', method = '', apiKey = null }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                let request = new XMLHttpRequest();
                request.open(method, url, true);
<<<<<<< HEAD
                if (typeof apiKey !== "object")
                    request.setRequestHeader("apikey", apiKey);
=======
                request.setRequestHeader("apikey", apiKey);
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68
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
<<<<<<< HEAD
=======
exports.HTTP = HTTP;
>>>>>>> 87305d379bc68f5195948ce6f3e313d56bdbbc68

const currencies = document.getElementById('currencies') as HTMLElement
const result = document.getElementById('result') as HTMLElement
const apiKey: string;//your apiKey

class HTTP {
    static async get({ url = '', method = '' }) {
        return new Promise((resolve, rejects) => {
            let request = new XMLHttpRequest();

            request.open(method, url, true);

            request.setRequestHeader("apikey", "Y7fG1N8jRu9kVezwNXuGVgQfsPrQHHkc")

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
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

async function convert() {

    let cs = await HTTP.get({
        method: 'GET',
        url: `https://api.apilayer.com/fixer/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01`
    });

    console.log(cs)
}


async function listCurrencies() {

    let cs = await HTTP.get({
        method: 'GET',
        url: `https://api.apilayer.com/fixer/symbols`
    });

    console.log(cs.symbols)

}



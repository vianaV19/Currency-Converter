const currencies = document.getElementById('currencies') as HTMLElement
const apiKey:string = 'fc53f67dad7105913284'


class HTTP {
    static async get({ url = '', method = '' }) {
        return new Promise((resolve, rejects) => {
            let request = new XMLHttpRequest();

            request.open(options.method, options.url, true);

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

const options = {
    method: 'GET',
    url: `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`
};

async function getCurrencies(){
    let cs = await HTTP.get(options)
    
    return Object.values(cs.results)
}

function listCurrencies() {
    
    getCurrencies().then(data => {
        
        console.log(data)

        for(const key in data){
            currencies.innerHTML += `${data[key].currencyName} <br>`
        }
    })
}

listCurrencies()


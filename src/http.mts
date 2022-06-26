export class HTTP {
    static async get({ url = '', method = '', apiKey = null as any }) {
        return new Promise((resolve, rejects) => {
            let request = new XMLHttpRequest();

            request.open(method, url, true);

            request.setRequestHeader("apikey", apiKey)

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

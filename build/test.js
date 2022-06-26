import fetch from "node-fetch"


let apiKey = "";

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

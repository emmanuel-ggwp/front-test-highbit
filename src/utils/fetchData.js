import { BASE_URL } from "./constants";


const fetchData = (url, {
    body,
    method = 'GET',
} = {}) => new Promise((resolve, reject) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    fetch(BASE_URL + url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log({ response })

            return resolve(response.json());
        })
        .catch(e => {
            console.log({ e })
            reject('Network response was not ok')
        })



});
export default fetchData;
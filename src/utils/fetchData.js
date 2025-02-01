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

                return response.json().then(errorResponse => {
                    if (response.status !== 400) {
                        throw { message: `Network response was not ok: ${JSON.stringify(errorResponse)}` };
                    } else {
                        let message = ''
                        for (const key in errorResponse) {
                            if (Object.prototype.hasOwnProperty.call(errorResponse, key)) {
                                const element = errorResponse[key];
                                message += `\n${!message.length ? '' : ', '}${key}: ${element}`
                            }
                        }
                        throw message
                    }
                });
            }

            console.log({ response })

            return resolve(response.json());
        })
        .catch(e => {
            console.error({ e })
            reject(e)
        })



});
export default fetchData;
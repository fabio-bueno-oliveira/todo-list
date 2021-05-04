const BASE_URL = 'http://localhost:4000';

export const todosService = {
  getTodos
}

function getTodos() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`${BASE_URL}/todos`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        let data;
        data = text && JSON.parse(text);
        return data;
    });
};
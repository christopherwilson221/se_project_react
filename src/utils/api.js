const baseUrl = 'http://localhost:3001/items';

function getItems() {
    return fetch({baseUrl}).then((res) => {
        return res.ok ? res.json() : Promise.reject('Error: ${res.status}');
    });
};

function addItem(name, imageUrl, weather) {
    return fetch({baseUrl}, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            name, 
            imageUrl,
            weather)
    }).then((res) => {
        return res.ok ? res.json() : Promise.reject('Error: ${res.status}');
    });
};

function deleteItem(id) {
    return fetch({baseUrl}/{id}, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    }).then((res) => {
        return res.ok ? res.json() : Promise.reject('Error: ${res.status}');
    });
};



export {getItems, addItem, deleteItem};
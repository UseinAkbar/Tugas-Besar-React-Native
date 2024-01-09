const searchByName = (name) => {
    return fetch(`http://103.56.148.225/aseto/api/web/v1/asset-items/search-by-name?name=${name}`)
    .then(res => res.json())
    .then(response => response.items)
}

export {searchByName}
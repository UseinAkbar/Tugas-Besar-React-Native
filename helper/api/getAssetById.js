const getAssetById = (id) => {
    return fetch(`http://103.56.148.225/aseto/api/web/v1/asset-items/get-item?id=${id}`)
    .then(res => res.json())
    .then(response => response.data)
}

export {getAssetById}
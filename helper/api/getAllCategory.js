const getAllCategory = () => {
    return fetch('http://103.56.148.225/aseto/api/web/v1/asset-categories/all')
    .then(res => res.json())
    .then(response => response.items)
}

export {getAllCategory}
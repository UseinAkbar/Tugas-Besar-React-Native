const searchByCategory = (id) => {
    return fetch(`http://103.56.148.225/aseto/api/web/v1/asset-items/all-filter-by-category?id_category=${id}`)
    .then(res => res.json())
    .then(response => response.items)
}

export {searchByCategory}
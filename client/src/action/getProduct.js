import callApi from "../api"
export async function getproducts(){
    const response = await callApi(`products/getProductByOffsetLimit/${1}/${4}`, "GET", null);
    const products = response;
    // console.log(products.data)
    return products.data;
}
export async function getallproducts(){
    const response = await callApi(`products/getProductByOffsetLimit/:offset/:limit`, "GET", null);
    const products = response;
    console.log(products.data)
    return products.data;
}
export async function getproductfilter(){
    const response = await callApi(`categories/getCategoriesFilters`, "GET", null);
    const products = response;
    return products.data;
}




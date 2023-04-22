import callApi from "../api"
export async function getALLproducts(){
    const response = await callApi(`products/getProductByOffsetLimit/${1}/${4}`, "GET", null);
    const products = response;
    console.log(products.data);
    return products.data;
}
// export async function getproducts(id=null,{rejectValue}){
//     const response = await callApi("products/getAllProducts", "GET", null);
//     const products = response.data;
//     return products.data;
// }



import axios from "axios";
import API_URL from "../url/url";

export default function callApi (endpoint,method="GET",data){
    return axios({method,url:`${API_URL}/${endpoint}`,data:data}).catch(err=>{
        console.log(err)
    })
}

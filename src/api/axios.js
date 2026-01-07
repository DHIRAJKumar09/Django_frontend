import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",

});
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token');
    if(token){
        req.headers.Authorization  = `Bearer ${token}`;
    }
    return req;
});
export default API;



// https://tcs.com/user
// https://tcs.com/admin
// https://tcs.com/guest
// https://tcs.com/support
// https://tcs.com/careers

// baseURL: "http://tcs.com/"
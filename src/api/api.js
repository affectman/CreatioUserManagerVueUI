import axios from 'axios';



export const ApiConnection = axios.create({
    baseURL: "https://localhost:44398/api/",

    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },

    paramsSerializer: params => {
        return JSON.stringify(params);
    }
});

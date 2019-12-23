import axios from "axios";

const api = axios.create({
    baseURL: "https://5ba412108da2f20014654cf8.mockapi.io/"
});

export default api;

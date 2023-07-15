import axios from "axios";

const api = axios.create({
  baseURL: "https://dev123.gigin.ai/abc/index.php/",
});

export default api;

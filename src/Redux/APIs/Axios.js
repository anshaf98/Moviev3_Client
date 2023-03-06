import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8800/api",
});

export default Axios;

// http://192.168.154.89

import axios from "axios";

// axios.defaults.baseURL = ""

const https = {
    post: axios.post,
    delete: axios.delete,
    get: axios.get,
    put: axios.put,
}

export default https;
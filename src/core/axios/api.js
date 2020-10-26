import axios from 'axios';

export default  {
    login({email, password}) {
        return axios.post("/login", {
            user:{email, password}
        },  {withCredentials: true})
    },
    signup(user) {
        return axios.post("/signup", {user},  {withCredentials: true})
    },
    async uploadImage(formData) {
        try {
           const response = await axios.post("/upload-image", formData, {withCredentials: true});
           const data = JSON.parse(response.data);
           return {status: "OK", data};
        } catch (e) {
            return {status: "ERR", reason: e}
        }
    },
    exit() {
        return axios.get("/exit", {withCredentials: true});
    }
}
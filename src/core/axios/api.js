import axios from './index';

export default  {
    login({email, password}) {
        return axios.post("/login", {
            user:{email, password}
        },  {withCredentials: true})
    },
    signup(user) {
        return axios.post("/signup", {user},  {withCredentials: true})
    }
}
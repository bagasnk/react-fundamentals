import Axios from 'axios'
import { API_URL } from '../../constants/API'

export const todoInputUserHandler = (text) => {
    return {
        type: "ON_CHANGE_TODO_USER_INPUT",
        payload: text,
    }
}

export const LoginHandler = (userData) => {
    return (dispatch) => {
        const { username, password } = userData;
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                password,
            }
        })
            .then(res => {
                if (res.data.length > 0) {
                    dispatch({
                        type: "ON_LOGIN_SUCCESS",
                        payload: res.data[0],
                    })
                } else {
                    dispatch({
                        type: "ON_LOGIN_FAIL",
                        payload: "username atau password salah",
                    })
                }
            })

            .catch(err => {
                console.log(err)
            })
    }
}

export const RegisterHandler = (userData) => {
    return (dispatch) => {
        const { username, fullName, password, role } = userData;
        Axios.get(`${API_URL}/users`, {
            params: {
                username: `${username}`
            }
        })
            .then((res) => {
                if (username && fullName && password && role != "") {
                    if (res.data.length == 0) {
                        Axios.post(`${API_URL}/users`, {
                            username: `${username}`,
                            fullName: `${fullName}`,
                            password: `${password}`,
                            role: `${role}`,
                        })
                            .then((res) => {
                                dispatch({
                                    type:"ON_REGISTER_SUCCESS",
                                    payload: res.data
                                })
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    } else {
                        dispatch({
                            type:"ON_REGISTER_FAIL",
                            payload:"Username sudah terpakai",  
                        })
                    }
                } else {
                    dispatch({
                        type:"ON_REGISTER_FAIL",
                        payload:"Inputan tidak boleh kosong",  
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import { Link, Redirect } from "react-router-dom";

class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        currentUsername: "",
        users: [],
        isLoggedIn: false,
    };

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    LoginDataHandler = () => {
        const { username, password,currentUsername } = this.state
        let condition = false
        Axios.get(`${API_URL}/users`, {
            params: {
                username: `${username}`,
                password: `${password}`,
            }
        })
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    if ((res.data[i].username == username) && (res.data[i].password == password)) {
                        condition = true
                    } else {
                        condition = false
                    }
                }
                if (condition) {
                    alert("Berhasil login")
                    this.setState({
                        isLoggedIn: true,
                        username: "",
                        password: "",
                        currentUsername:username,
                    });
                } else {
                    alert("Username dan Password tidak cocok / tidak ada")
                    this.setState({
                        username: "",
                        password: "",
                    });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        const {
            username,
            password,
            isLoggedIn,
            currentUsername,
        } = this.state;

        if (!isLoggedIn) {
            return (
                <div>
                    <center className="container">
                        <div className="card p-5" style={{ width: "400px" }}>
                            <h4>Login</h4>
                            <input
                                value={username}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => this.inputHandler(e, "username")}
                            />
                            <input
                                value={password}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Password"
                                onChange={(e) => this.inputHandler(e, "password")}
                            />
                            <input
                                type="button"
                                value="Login"
                                className="btn btn-primary mt-3"
                                onClick={this.LoginDataHandler}
                            />
                        </div>
                    </center>
                </div>
            );
        }else{
            return <Redirect to={`/profile/${currentUsername}`} />
          }
    }
}



    export default LoginScreen;

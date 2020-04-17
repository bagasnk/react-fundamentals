import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import { API_URL } from '../../constants/API'

class RegisterScreen extends React.Component {
    state = {
        username: "",
        fullName: "",
        password: "",
        role: "",
        users: [],
    }

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    postDataHandler = () => {
        const { username, fullName, password, role } = this.state;
        Axios.get(`${API_URL}/users`, {
            params: {
                username: `${username}`
            }
        })
            .then((res) => {
                if (username && fullName && password && role != "") {
                    if (res.data.length == 0) {
                        alert('Berhasil Menambahkan akun')
                        Axios.post(`${API_URL}/users`, {
                            username: `${username}`,
                            fullName: `${fullName}`,
                            password: `${password}`,
                            role: `${role}`,
                        })
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })

                        this.setState({
                            username: "",
                            fullName: "",
                            password: "",
                            role: "",
                        });
                    } else {
                        alert('Username sudah terpakai')
                        this.setState({
                            username: "",
                            fullName: "",
                            password: "",
                            role: "",
                        });
                    }

                } else {
                    alert('username sudah terpakai')
                    this.setState({
                        username: "",
                        fullName: "",
                        password: "",
                        role: "",
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
            fullName,
            password,
            role,
            users,
        } = this.state;

        return (
            <div>
                <center className="container">
                    <div className="card p-5" style={{ width: "400px" }}>
                        <h4>Register</h4>
                        <input
                            value={username}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.inputHandler(e, "username")}
                        />
                        <input
                            value={fullName}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Full name"
                            onChange={(e) => this.inputHandler(e, "fullName")}
                        />
                        <input
                            value={password}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Password"
                            onChange={(e) => this.inputHandler(e, "password")}
                        />
                        <input
                            value={role}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Role"
                            onChange={(e) => this.inputHandler(e, "role")}
                        />
                        <input
                            type="button"
                            value="Register"
                            className="btn btn-primary mt-3"
                            onClick={this.postDataHandler}
                        />
                    </div>
                </center>
            </div>
        )
    }
}


export default RegisterScreen;
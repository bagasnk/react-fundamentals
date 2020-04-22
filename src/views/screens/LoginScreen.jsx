import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { todoInputUserHandler, LoginHandler } from '../../redux/actions'
import { connect } from 'react-redux'


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
        const { username, password } = this.state
        const userData = {
            username,
            password,
        };
        this.props.onLogin(userData)
        //     let condition = false
        //     Axios.get(`${API_URL}/users`, {
        //         params: {
        //             username: `${username}`,
        //             password: `${password}`,
        //         }
        //     })
        //         .then((res) => {
        //             for (let i = 0; i < res.data.length; i++) {
        //                 if ((res.data[i].username == username) && (res.data[i].password == password)) {
        //                     condition = true
        //                 } else {
        //                     condition = false
        //                 }
        //             }
        //             if (condition) {
        //                 swal("Success!", "Berhasil berhasil hore", "success");
        //                 this.props.onChangeUsername(username)
        //                 this.setState({
        //                     isLoggedIn: true,
        //                     username: "",
        //                     password: "",
        //                     currentUsername: username,
        //                 });
        //             } else {
        //                 swal("Error!", "Username atau password salah", "error");
        //                 this.setState({
        //                     username: "",
        //                     password: "",
        //                 });
        //             }
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
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
                            <p>username: {this.props.user.username}</p>
                            <p>{this.props.user.errMsg}</p>
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
        } else {
            return <Redirect to={`/profile/${currentUsername}`} />
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onChangeUsername: todoInputUserHandler,
    onLogin: LoginHandler,

}

// export default LoginScreen;
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

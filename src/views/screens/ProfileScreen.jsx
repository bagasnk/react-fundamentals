import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'

class ProfileScreen extends React.Component {

    state = {
        userList: [],
    }
    getDataHandler = () => {
        // Request get by ID
        // IDNYA diletakan setelah '/' milik nama table

        // Axios.get('http://localhost:3001/users')
        //     .then((res) => {            // res = respon dari API
        //         console.log(res.data)
        //         this.setState({usersList: res.data })
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })


        Axios.get('http://localhost:3001/users', {
            params: {
                // username:'seto'
                
            }
        })
            .then((res) => {           
                // res = respon dari API
                console.log(res.data)
                // this.setState({ usersList: res.data })
            })
            .catch((err) => {
                console.log(err)
            })

            console.log("bukan axios")
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/1`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    postDataHandler = () => {
        Axios.post(`${API_URL}/users`,{
            username:"bill",
            password:"123123123",
            fullName:"Bill Gates",
            role:"admin",    
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className='container'>
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.username}</h2>
                <input
                    onClick={this.getDataHandler}
                    type="button"
                    value="Get Data"
                    className="btn btn-success"
                />
                <input
                    onClick={this.deleteDataHandler}
                    type="button"
                    value="delete data"
                    className="btn btn-danger"
                />
                <input
                    onClick={this.postDataHandler}
                    type="button"
                    value="Post data"
                    className="btn btn-primary"
                />
            </div>
        )
    }
}

export default ProfileScreen


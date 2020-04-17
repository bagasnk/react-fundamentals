import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'

class ProfileScreen1 extends React.Component {
    state = {
        userList: [],
    }
    componentDidMount() {
        Axios.get(`${API_URL}/users`, {
            params: {
                username: `${this.props.match.params.username}`
            }
        })
            .then((res) => {
                console.log(res.data)
                this.setState({ userList: res.data[0] })
                
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { userList} = this.state
    
        return (
            <div className='container'>
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.username}</h2>
                <div className="card" styles="width: 18rem;">
                    <div className="card-header">Id : {userList.id} </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username : {userList.username} </li>
                        <li className="list-group-item">Full name : {userList.fullName} </li>
                        <li className="list-group-item">Role : {userList.role} </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProfileScreen1;
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogoutHandler } from '../../redux/actions'
import Cookie from 'universal-cookie'
const cookiesObject = new Cookie();


class Navbar extends React.Component {
    LogoutDataHandler = () => {
        this.props.onLogout()
        cookiesObject.remove("authData")

    }
    render() {
        return (
            <div className='d-flex justify-content-around align-items-center'
                style={{ height: '80px' }}>

                <Link to='/profile'>Profile</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                {this.props.user.username}
                {this.props.user.id ? <input
                    type="button"
                    value="Logout"
                    className="btn btn-primary mt-3"
                    onClick={this.LogoutDataHandler}
                /> : null}

            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onLogout: LogoutHandler,

}

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);
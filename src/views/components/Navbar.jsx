import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends React.Component{
    render(){
        return(
            <div className='d-flex justify-content-around align-items-center'
            style={{ height:'80px'}}>

                <Link to='/profile'>Profile</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                {this.props.user.username}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps)(Navbar);
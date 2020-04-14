import React from 'react'

class InputScreen extends React.Component {
    state = {
        username: '',
        email: '',
        textbox: ''
    }
    render() {
        const { username,email,textbox } = this.state

        const inputHandler = (event,field) => {
            this.setState({ [field]: event.target.value })
        }

        return (
            <div>
                <h1>InputScreen</h1>
                <h3>Username: {username} </h3>
                <h3>Email : {email} </h3>
                <input
                    // onChange={inputHandler}
                    onChange={(e) => inputHandler(e,'username')}
                    type="text"
                    placeholder='Username'
                />
                <br/>
                <input
                    // onChange={inputHandler}
                    onChange={(e) => inputHandler(e,'email')}
                    type="text"
                    placeholder='email'
                />
                <br/>
                <textarea 
                onChange={(e) => inputHandler(e,'textbox')}
                name="" id="" cols="30" rows="10"
                ></textarea>
                <p>{textbox.length}/140</p>
            </div>
        )
    }
}

export default InputScreen
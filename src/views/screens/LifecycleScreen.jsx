import React from 'react'

class LifecycleScreen extends React.Component {
    state = {
        username: "",
        time: new Date(),
    }
    
    //Functions here
    componentDidMount(){
       this.time = setInterval(() => this.triggerClock(), 100)
    }

    triggerClock = () => {
        this.setState({time: new Date() })
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    // componentWillMount(){
    //     alert('Component will mount!')
    // }

    // componentDidUpdate() {
    //     console.log(this.state.username)
    // }

    




    render(){
        return(
            <div>
                <h1>LifeCycleScreen</h1>
                <h2>Welcome, {this.state.username}</h2>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                <input 
                type="text"
                onChange={(e) => this.setState({ username: e.target.value})}
                />
            </div>
        )
    }
}

export default LifecycleScreen
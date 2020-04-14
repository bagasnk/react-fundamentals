import React from 'react'


// ----- cara baru -----
// const CounterScreen = (props) => {
//     return(
//         <div>
//             <div>{props.kota}</div>
//         </div>
//     )
// }

// ----- cara lama ------
class CounterScreen extends React.Component{
    state ={
        counter1: 0,
        counter2: 0,
        counter3: 0,
    }
    render() {
        return (
            <div>
                <div className='row'>
                <div className='col-4'>
                <h1>{'Counter 1 = ' + this.state.counter1}</h1>
                <p className='btn btn-danger' onClick={() => this.setState({counter1: this.state.counter1-1})}>-</p>
                <p className='btn btn-primary' onClick={() => this.setState({counter1: this.state.counter1+1})}>+</p>
                </div>
                <div className='col-4'>
                <h1>{'Counter 1 = ' + this.state.counter2}</h1>
                <p className='btn btn-danger' onClick={() => this.setState({counter2: this.state.counter2-1})}>-</p>
                <p className='btn btn-primary' onClick={() => this.setState({counter2: this.state.counter2+1})}>+</p>
                </div>

                <div className='col-4'>
                <h1>{'Counter 1 = ' + this.state.counter3}</h1> 
                <p className='btn btn-danger' onClick={() => this.setState({counter3: this.state.counter3-1})}>-</p>
                <p className='btn btn-primary' onClick={() => this.setState({counter3: this.state.counter3+1})}>+</p>
                </div>
            </div>

                <h1>All Counter</h1>
                <input className='btn btn-primary' 
                       type='button' 
                       value='-'
                       onClick={() => this.setState({counter1: this.state.counter1-1,counter2: this.state.counter2-1,counter3: this.state.counter3-1})}
                />
                 <input className='btn btn-primary' 
                       type='button' 
                       value='+'
                       onClick={() => this.setState({counter1: this.state.counter1+1,counter2: this.state.counter2+1,counter3: this.state.counter3+1})}
                />

                <input className ='btn btn-success'
                type='button'
                value='reset'
                onClick={() => this.setState({counter1: 0,counter2: 0,counter3: 0})}
                
                 />
            </div>
        )
    }
}

export default CounterScreen
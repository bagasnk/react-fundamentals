import React from 'react'
class Ex14AprilScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person: [],
            username: '',
            password: '',
            repeatpassword: '',
            teks: ''
        }
    }
    render() {
        const { username, password, repeatpassword } = this.state
        const newPerson = { 'username': username, 'password': password, 'repeatpassword': repeatpassword }
        let submit = this.state.person.concat(newPerson)

        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }
        const LoginHandler =(event, field)=>{
            this.setState({[field]:event.target.value})
        }
        
        const registerUser = () => {
            if (username && password && repeatpassword != '' && password == repeatpassword) {
                alert('Berhasil Register')
                this.setState({ person: submit })
            } else {
                alert('Username harus terisi dan Password tidak sesuai')
            }
        }


        const loginUser = () => {
            
            const usernameLogin = this.state.username
            const passwordLogin = this.state.password
            
            let findUsr = this.state.person.find(val => {
                return val.username == usernameLogin
            })
            let idxUsr = this.state.person.findIndex((val) => {
                return val.username == usernameLogin
            })

            let idxPass = this.state.person.findIndex(val => {
                return val.password == passwordLogin
            })

            console.log(this.state.person)
            if(idxUsr == idxPass && findUsr){
                this.setState({teks : `hallo ${usernameLogin}`})
            }else{
                alert('username atau password salah')
                this.setState({teks : ''})
            }
        }

        return (
            <div>
                <h1>Auth Screen</h1>
                <div className='border container' style={{
                    width: '25%',
                    height: '250px'
                }}>
                    <h4 className='mt-4 mb-3'>Register</h4>
                    <div className='container'>
                        <input id type="text" className='form-control form-control-sm mb-1' placeholder='Username'
                            onChange={(e) => inputHandler(e, 'username')}/>
                        <input type="password" className='form-control form-control-sm mb-1 ' placeholder='Password'
                            onChange={(e) => inputHandler(e, 'password')}/>
                        <input type="password" className='form-control form-control-sm mb-3 ' placeholder='Repeat Password'
                            onChange={(e) => inputHandler(e, 'repeatpassword')} />
                        <input type="button" className='btn btn-block mb-3' value='Register' onClick={registerUser} />
                    </div>
                </div>
                <div className='border container' style={{
                    width: '25%',
                    height: '250px'
                }}>
                    <h4 className='mt-4 mb-3'>Login</h4>
                    <div className='container'>
                        <input type="text" className='form-control form-control-sm mb-1' placeholder='Username'
                            onChange={(e) => LoginHandler(e, 'username')} />
                        <input type="password" className='form-control form-control-sm mb-2 ' placeholder='Password'
                            onChange={(e) => LoginHandler(e, 'password')} />
                        <input type="button" className='btn btn-block mb-3' value='Login' onClick={loginUser} />
                    </div>
                    <h5>{this.state.teks}</h5>
                </div>
            </div>
        )
    }
}
export default Ex14AprilScreen

import React, {Component} from 'react'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    changePassword(pass) {
        this.setState({password: pass})
    }
    changeUsername(name) {
        this.setState({username: name})
    }

    handleLogin() {
        alert(`username: ${this.state.username} password: ${this.state.password}`)
    }
    
    
    
    render() {
        return (
            <div>
                <input onChange={(e) => this.changePassword(e.target.value)} />
                <input onChange={(e) => this.changeUsername(e.target.value)} />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;
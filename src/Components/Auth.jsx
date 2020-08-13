import React from 'react';

class Auth extends React.Component {
    state = {
        isNewUser: false,
        username: '',
        password: '',
        confirmation: '',
    }

    toggleNewUser = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser, username: '', password: '', confirmation: '' }))

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        const { isNewUser, password, confirmation, username } = this.state;
        isNewUser
            ? password === confirmation ? this.props.history.push('/profile') : alert('try again!')
            : this.props.history.push('/events')
    }

    renderLogin = () => {
        const { username, password } = this.state;
        return (
            <>
                <input name="username" placeholder="username" value={username} onChange={this.handleChange} />
                <br></br><br></br>
                <input name="password" placeholder="password" type="password" value={password} onChange={this.handleChange} />
                <br></br><br></br>
            </>
        )
    }

    renderSignup = () => {
        const { username, password, confirmation } = this.state;
        return (
            <>
                <input name="username" placeholder="username" value={username} onChange={this.handleChange} />
                <br></br><br></br>
                <input name="password" placeholder="password" type="password" value={password} onChange={this.handleChange} />
                <br></br><br></br>
                <input name="confirmation" placeholder="confirm password" type="password" value={confirmation} onChange={this.handleChange} /><br></br><br></br>
            </>
        )
    }

    render() {
        let { isNewUser } = this.state;
        return (
            <div className="simple-flex-col">
                <h2>{isNewUser ? "Don't have an account yet? Sign up:" : "Welcome back:"}</h2>
                {isNewUser ? this.renderSignup() : this.renderLogin()}
                <button className="button" type="submit" onClick={this.handleSubmit}>submit</button><br></br><br></br>
                <div className="authtoggle" onClick={this.toggleNewUser}>{isNewUser ? "Already signed up? Log in." : "New here? Sign up."}</div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        )
    }
}

export default Auth;

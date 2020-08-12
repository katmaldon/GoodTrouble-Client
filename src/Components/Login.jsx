import React, { Component } from 'react'
import { Button, Divider, Form, Segment } from 'semantic-ui-react'

class Login extends Component {

    state = {
        name: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password
            })
        }

        if (this.state.password === this.state.passwordConfirmation) {
            fetch("http://localhost:3000/api/v1/login", options)
                .then(res => res.json())
                .then(response => {
                    if (response.errors) {
                        alert(response.errors)
                    }
                    else {
                        this.props.setUser(response)
                    }
                })
        }
        else {
            alert("Passwords need to match and are case-sensitive.")
        }
    }

    handleSignup = () => {
        return (
            this.props.history.push('/Signup')
        )
    }
    handleLogin = () => {
        return (
            this.props.history.push('/')
        )
    }

    render() {
        console.log(this.props.history);
        return (
            <div className="login_form">
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <Divider vertical><h2>log in</h2></Divider>
                        <Form.Input
                            name="name"
                            label='username'
                            value={this.state.name}
                            onChange={this.handleChange}

                        /><br></br>
                        <Form.Input
                            name="password"
                            value={this.state.password}
                            type="password"
                            onChange={this.handleChange}
                            label='password'

                        />
                        <Button classname="login_button" content='log in' primary onClick={this.handleLogin} />
                        <br></br><br></br>
                    </div>
                </Form>

                <br></br>
            </div>
        )
    };
};

export default Login;


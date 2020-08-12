import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Header from './Components/Header';
import Navbar from './Components/Navbar';
//import Login from './Components/Login';
//import Signup from './Components/Signup'
import HomeContainer from './Containers/HomeContainer';
import ProfileContainer from './Containers/ProfileContainer'
import CommunityContainer from './Containers/CommunityContainer';
import MediaContainer from './Containers/MediaContainer'
import ActNowContainer from './Containers/ActNowContainer'
import About from './Components/About';
import Quote from './Components/Quote';



class App extends Component {

    // state = {
    //     currentUser: null
    // };

    // componentDidMount() {
    //     const token = localStorage.token

    //     if (token) {

    //         fetch("http://localhost:3001/api/v1/auto_login", {
    //             headers: {
    //                 "Authorization": token
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(response => {
    //                 if (response.errors) {
    //                     alert(response.errors)
    //                 } else {
    //                     this.setState({
    //                         currentUser: response
    //                     })
    //                 }
    //             })
    //     }
    // }

    // setUser = (response) => {
    //     this.setState({
    //         currentUser: response.user
    //     }, () => {
    //         localStorage.token = response.token
    //         this.props.history.push("/events")
    //     })

    // }

    // logout = () => {
    //     this.setState({
    //         currentUser: null
    //     }, () => {
    //         localStorage.removeItem("token")
    //         this.props.history.push("/login")
    //     })
    // }

    render() {
        //console.log("USER", this.state.currentUser)
        return (
            <div className='App'>
                <Navbar
                //currentUser={this.state.currentUser}
                />
                <Header />
                <Quote />
                    <Switch>
                        <Route path='/community' render={() => <CommunityContainer />} />
                        <Route path='/media' render={() => <MediaContainer />} />
                        <Route path='/actnow' render={() => <ActNowContainer />} />
                        <Route path='/profile' render={() => <ProfileContainer />} />
                        <Route path='/about' render={() => <About />} />
                        <Route exact path='/' component={HomeContainer} />
                    </Switch>

                <footer>© {new Date().toISOString().substring(0, 4)} Kat Maldon</footer>
            </div>
        );
    }
}

export default App;


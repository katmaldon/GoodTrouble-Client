import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
// import About from './Components/About';
// import Login from './Components/Login';
// import SignUp from './Components/Signup'
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import EventsContainer from './Containers/EventsResourcesContainer';
//import UserContainer from './Containers/UserContainer'


// import { Route, Switch } from "react-router-dom";

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
                {/* <Switch>
                    <Route path='/login' component={Login} />} />
                    <Route path='/signup' component={Signup}/>
                    <Route path='/events' render={() => <EventsResourcesContainer />} />
                    <Route path='/media' render={() => <MediaContainer />} />
                    <Route path='/engagement' render={() => <EngagementContainer /> <PetitionsContainer />} />
                    <Route path='/digests' render={() => <AudiosContainer /> <BooksContainer/> <VideosContainer/>} />
                    <Route path='/user' render={() => <UserContainer />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/' component={Home} />
                    <Route render={() => <h1>WHOOPS! Wrong way...</h1>} />
                </Switch> */}
                <footer>© {new Date().toISOString().substring(0, 4)} Kat Maldon</footer>
            </div>
        );
    }
}

export default App;


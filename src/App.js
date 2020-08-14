import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HomeContainer from './Containers/HomeContainer';
import ProfileContainer from './Containers/ProfileContainer'
import CommunityContainer from './Containers/CommunityContainer';
import MediaContainer from './Containers/MediaContainer'
import ActNowContainer from './Containers/ActNowContainer'
import About from './Components/About';
import Quote from './Components/Quote';
import Auth from './Components/Auth';


class App extends Component {

    render() {
        return (
            <div className='App'>
                <Navbar />
                <Header />
                <Quote />
                <Switch>
                    <Route path='/community' render={() => <CommunityContainer />} />
                    <Route path='/media' render={() => <MediaContainer />} />
                    <Route path='/actnow' render={() => <ActNowContainer />} />
                    <Route path='/profile' render={() => <ProfileContainer />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/login' component={Auth}/>

                    <Route exact path='/' component={HomeContainer} />
                </Switch>
                <footer>© {new Date().toISOString().substring(0, 4)} Kat Maldon</footer>
            </div>
        );
    }
}

export default App;


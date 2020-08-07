import React from 'react';
import Signup from './Signup'
import Login from './Login'
import Greeting from './Greeting'


class ProfileContainer extends React.Component {

    render() {
        return (
            <div>
                <Greeting/>
                <Login />
                <Signup />
            </div>
        );
    }

}

export default ProfileContainer;

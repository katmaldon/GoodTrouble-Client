import React from 'react';
import User from '../Components/User'

class UserContainer extends React.Component {

    render() {

        return (
            <div className="user-container">
                <User />
            </div>
        );
    };
}

export default UserContainer;

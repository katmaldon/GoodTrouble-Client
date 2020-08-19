import React from 'react';
import UserContainer from './UserContainer'

import FavoritesContainer from './FavoritesContainer'

class ProfileContainer extends React.Component {

    render() {
        return (
            <div className="profile-container">

                <UserContainer />
                <FavoritesContainer />
            </div>
        );
    }

}

export default ProfileContainer;

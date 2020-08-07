import React from 'react';
import UserContainer from './UserContainer'
import NotesContainer from './NotesContainer'
import FavoritesContainer from './FavoritesContainer'

class ProfileContainer extends React.Component {

    render() {
        return (
            <div>
                <UserContainer />
                <FavoritesContainer />
                <NotesContainer />
            </div>
        );
    }

}

export default ProfileContainer;

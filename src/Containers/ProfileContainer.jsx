import React from 'react';
import UserContainer from './UserContainer'
import NotesContainer from './NotesContainer'
import FavoritesContainer from './FavoritesContainer'

class ProfileContainer extends React.Component {

    render() {
        return (
            <div className="profile-container">

                <UserContainer />
                <FavoritesContainer />
                <NotesContainer
                    notes={this.notes}
                    addNote={this.addNote}
                />
            </div>
        );
    }

}

export default ProfileContainer;

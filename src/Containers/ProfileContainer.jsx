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
                <NotesContainer
                    notes={this.notes}
                    addNote={this.addNote}
                />


                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        );
    }

}

export default ProfileContainer;

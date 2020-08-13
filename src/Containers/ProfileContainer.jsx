import React from 'react';
//import UserContainer from './UserContainer'
//import NotesContainer from './NotesContainer'
//import FavoritesContainer from './FavoritesContainer'

class ProfileContainer extends React.Component {

    render() {
        return (

            <div>
                <div className="user_card">
                    <img src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" className="card_image" />

                    <div className="user_name">
                        <h1>Kat(35), NYC</h1>
                        <h2>Software engineer and organizer</h2>
                    </div>
                    {/* <FavoritesContainer /> */}
                    {/* <NotesContainer
                    addNote={this.addNote}
                /> */}

                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div >
        );
    }

}

export default ProfileContainer;

import React, { Component } from 'react';
import NotesContainer from '../Containers/NotesContainer'


class User extends Component {

    render() {
        return (
            <div>
                <div><h2>"If you believe in a cause, be willing to stand up for that cause with a million people or by yourself."</h2></div>
                <div><h3>Otis S. Johnson</h3></div><br></br>
                <div className="profile_title"><h2>Your Profile</h2></div>
                <div className="user"><br></br>
                    <img className="user_image" src="https://i.imgur.com/5dR5Muw.jpg?1" alt="Kat" />
                    <div className="user_content">
                        <div className="user_name">
                            <h2>Kat(35), NYC</h2>
                            <p>{"Software engineer and organizer."}<br></br>{"Creature of havoc."}<br></br>{"Dissent is patriotism."}</p><br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default User;

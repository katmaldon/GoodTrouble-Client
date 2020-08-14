import React, { Component } from 'react';

class User extends Component {

    render() {
        return (

            <div className="user_card">
                <img src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" className="card_image" />

                <div className="user_name">
                    <h1>Kat(35), NYC</h1>
                    <h2>Software engineer and organizer</h2>
                </div>
            </div>

        );
    }

}

export default User;

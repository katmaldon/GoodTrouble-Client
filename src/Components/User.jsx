import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
            <div>
                <div><h2>"If you believe in a cause, be willing to stand up for that cause with a million people or by yourself."</h2></div>
                <div><h3>Otis S. Johnson</h3></div>
                <br></br>

                <div className="user">
                    <img className="user_image" src="https://i.imgur.com/td8DG0k.jpg?1" alt="Kat" />
                    <div className="user_content">
                        <div className="user_name">
                            <h2>Kat(35), NYC</h2>
                        </div>
                        <div className="user_bio">
                            <h3>Software engineer and organizer</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default User;

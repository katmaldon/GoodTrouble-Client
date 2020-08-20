import React, { Component } from 'react';
import FavoritesCollection from '../Components/FavoritesCollection'

class FavoritesContainer extends Component {

    state = {
        events: []
    }

    fetchEvents = () => {
        fetch('http://localhost:3000/user_events')
            .then(r => r.json())
            .then(events => {
                this.setState({ events });
            });
    };

    componentDidMount() {
        this.fetchEvents()
    };

    removeFavorite = (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        }
        fetch(`http://localhost:3000/user_events/${id}`, options)
            .then(res => res.json())
            // .then(e => {
            //     this.favoriteEvent
            // })
    };

    render() {
        return (

            <div className="fav-container">
                <div className="community_title"><h2>Bookmarked Events & Resources</h2></div>
                <FavoritesCollection
                    events={this.state.events}
                    removeFavorite={this.removeFavorite}
                />
            </div>
        );
    }
}

export default FavoritesContainer;

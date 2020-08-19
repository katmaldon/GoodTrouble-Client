import React from "react";
import EventsCollection from "../Components/EventsCollection";

class EventsContainer extends React.Component {

    state = {
        events: [],
        favorites: []
    }

    fetchEvents = () => {
        fetch('http://localhost:3000/events')
            .then(r => r.json())
            .then(backendRes => {
                this.setState({ events: backendRes.events, favorites: backendRes.favorites });
            });
    };

    componentDidMount() {
        this.fetchEvents()
    };

    favoriteEvent = (id) => {
        let favoritedEvents = this.state.events.map(event => {
            if (event.id === id) {
                event.favorite = !event.favorite
                return (event)
            }
            else { return event }
        })
        this.setState({
            events: favoritedEvents
        })
    }

    handleFavorite = (event_id) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                event_id: event_id
            })
        }

        fetch(`http://localhost:3000/user_events`, options)
            .then(res => res.json())
            // .then(e => {
            //     this.favoriteEvent
            // })
    };



    render() {
        return (
            <div className="events_container">
                <div className="community_title"><h2>Events</h2></div>
                <EventsCollection
                    events={this.state.events}
                    favorites={this.state.favorites}
                    handleFavorite={this.handleFavorite}
                    favoriteEvent={this.favoriteEvent}
                />
            </div>
        );
    };
};

export default EventsContainer;


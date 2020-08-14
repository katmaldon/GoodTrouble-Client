import React from "react";
import EventsCollection from "../Components/EventsCollection";

class EventsContainer extends React.Component {

    state = {
        events: []
    }

    fetchEvents = () => {
        fetch('http://localhost:3000/events')
            .then(r => r.json())
            .then(events => {
                this.setState({ events });
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

    handleFavorite = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                favorite: !this.props.favorite
            })
        }

        fetch(`http://localhost:3000/events/${id}`, options)
            .then(res => res.json())
            .then(e => {
                this.favoriteEvent(id)
            })
    };


    render() {
        return (
            <div>
                <EventsCollection
                    events={this.state.events}
                    handleFavorite={this.handleFavorite}
                    favoriteEvent={this.favoriteEvent}
                />
            </div>
        );
    };
};

export default EventsContainer;


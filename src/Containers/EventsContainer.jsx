import React from 'react';
import EventsCollection from '../Components/EventsCollection';

class EventsContainer extends React.Component {
    state = {
        events: [],
        search: ''
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

    likeEvent = (id) => {
        let updatedArr = this.state.events.map(event => {
            if (event.id === id) {
                event.favorite = !event.favorite
                return (event)
            }
            else { return event }
        })
        this.setState({
            events: updatedArr
        })
    }

    handleLike = (id) => {
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
                this.likeEvent(id)
            })
    };

    render() {
        const filteredEvents = this.state.events.filter(event => event.name.toLowerCase().includes(this.state.search.toLowerCase()))
        return (
            <div>
                <EventsCollection
                    events={filteredEvents}
                    handleLike={this.handleLike}
                    likeEvent={this.likeEvent}
                />
            </div>
        );
    };
};

export default EventsContainer;



import React, { Component } from 'react';
// import { Button, Card } from 'semantic-ui-react';

class Event extends Component {
    state = { showDetails: false }

    toggleDetails = () => {
        this.setState(prevState => ({ showDetails: !prevState.showDetails }))
    }

    renderFront = () => {
        return (
            <>
                <Card >
                    <div className="event_card_title">
                        <h1>{this.props.title}</h1>
                        <p onClick={() => this.props.handleLike(this.props.id)}>{this.props.favorite ? "💚" : "♡"}</p>
                        <Button content="show events details" onClick={this.toggleDetails} />
                    </div>
                </Card>
            </>
        )
    }

    renderBack = () => {
        return (
            <>
                <Card onClick={this.toggleDetails}>
                        <div className="event_card_detail">
                            <p>Description: {this.props.description} </p>
                            <p>Date & time: {this.props.date}, {this.props.time}</p>
                            <p>Location: {this.props.location} </p>
                            <p>For additional details please visit: <a href={this.props.event_url}>{this.props.event_url}</a></p>
                        </div>
                </Card>
            </>
        )
    }

    render() {
        return (
            <>
                <div >
                    {this.state.showDetails ? this.renderBack() : this.renderFront()}
                </div>
            </>
        );
    }

}

export default Event;


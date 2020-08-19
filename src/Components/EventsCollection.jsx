import React from "react";
import Event from "./Event";

const EventsCollection = (props) => {

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">event</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">date</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">time</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">place</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">url</h3>
                    </th>
                </tr>
                {props.events.map(event =>
                    <Event key={event.id}
                        {...event}
                        handleLike={props.handleFavorite}
                        favoriteEvent={props.favoriteEvent}
                    />)}
            </tbody>
        </table>
    );
};

export default EventsCollection;

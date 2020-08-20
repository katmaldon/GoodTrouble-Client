import React from "react";

const Event = (props) => {

    let favorite = props.favorites.filter(
        function (fav) {
            if (fav.event_id == props.id) {
                return true;
            };
        }
    )[0];

    let text = favorite ? "favorited" :  "add to favorites" ;


    return (

        <tr>
            <td>{props.title}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>{props.location}</td>
            <td>{props.url}</td>
            <td><button className="community_button" onClick={() => props.handleFavorite(props.id)}>{text}</button></td>
        </tr>
    );
};

export default Event;

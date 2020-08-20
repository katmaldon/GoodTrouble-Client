import React, { useState } from "react";

const Event = (props) => {

    const [isFav, setFav] = useState(false)

    const toggleFav = () => setFav(!isFav)

    let favorite = props.favorites.filter(
        function (fav) {
            if (fav.event_id === props.id) {
                return true;
            };
        }
    )[0];

    let text = isFav ? "favorited" :  "add to favorites" ;

        const favoriting = () => {
            props.handleFavorite(props.id)
            toggleFav()
        }

    return (

        <tr>
        {isFav ? console.log("true") : console.log("false") }
            <td><h5 className="title">{props.title}</h5></td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td>{props.location}</td>
            <td><h4 className="url">{props.url}</h4></td>
            <td><button className="community_button" onClick={() => favoriting() }>{text}</button></td>
        </tr>
    );
};

export default Event;

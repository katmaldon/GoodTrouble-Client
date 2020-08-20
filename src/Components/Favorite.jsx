import React from 'react';

const Favorite = (props) => {

    return (
        <tr>
            <td><h5 className="title">{props.title}</h5></td>
            <td>{props.location}, {props.date}, {props.time}</td>
            <td><h4 className="url">{props.url}</h4></td>

            <td><button className="community_button" onClick={() => props.removeFavorite(props.id)}>x</button></td>
        </tr>
    );

}

export default Favorite;

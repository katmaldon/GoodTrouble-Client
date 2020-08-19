import React from 'react';

const Favorite = (props) => {


    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.url}</td>

            <td><button className="community_button" onClick={() => props(props.id)}>remove</button></td>
        </tr>
    );

}

export default Favorite;

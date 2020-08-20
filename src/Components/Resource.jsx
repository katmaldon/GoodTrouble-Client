import React from "react";

const Resource = (props) => {

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.url}</td>
            <td><button className="community_button" onClick={() => props.handleHighlight(props.id)}>add to favorites</button></td>
        </tr>
    );
};

export default Resource;

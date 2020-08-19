import React from 'react';

const Petition = (props) => {

    return (
            <tr>
                <td>{props.cause}</td>
                <td>{props.description}</td>
                <td>{props.url}</td>
                <td><button className="community_button" onClick={() => props.signNow(props.id)}>sign now</button></td>
            </tr>
    );

}

export default Petition;

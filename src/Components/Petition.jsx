import React from 'react';

const Petition = (props) => {

    return (
            <tr>
                <td><h5 className="title">{props.cause}</h5></td>
                <td>{props.description}</td>
                <td><h4 className="url">{props.url}</h4></td>
                <td><button className="button" onClick={() => props.signNow(props.id)}><a href="https://www.standwithbre.com/#petition">sign now</a></button></td>
            </tr>
    );

}

export default Petition;

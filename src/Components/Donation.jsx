import React from 'react';

const Book = (props) => {


    return (

            <tr>
                <td><h5 className="title">{props.organization}</h5></td>
                <td>{props.description}</td>
                <td><h4 className="url">{props.url}</h4></td>
                <td><button className="community_button" onClick={() => props.handleDonate(props.id)}>donate now</button></td>
            </tr>

    );

}

export default Book;

import React from 'react';

const Book = (props) => {


    return (

            <tr>
                <td>{props.organization}</td>
                <td>{props.description}</td>
                <td>{props.url}</td>
                <td><button className="community_button" onClick={() => props.handleDonate(props.id)}>donate now</button></td>
            </tr>

    );

}

export default Book;

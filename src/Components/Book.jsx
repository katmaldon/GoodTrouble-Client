import React from 'react';

const Book = (props) => {


    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.description}</td>

            <td><button className="community_button" onClick={() => props(props.id)}>buy now</button></td>
        </tr>
    );

}

export default Book;

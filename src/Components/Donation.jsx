import React from 'react';

const Book = (props) => {


    return (
        <div className="books_list">
            <tr>
                <td>{props.organization}</td>
                <td>{props.description}</td>
                <td>{props.url}</td>
                <td><button className="community_button" onClick={() => props.handleDonate(props.id)}>signed?</button></td>
            </tr>
        </div>
    );

}

export default Book;

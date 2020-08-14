import React from 'react';

const Book = (props) => {


    return (
        <div className="books_list">
            <tr>
                <td>{props.title}</td>
                <td>{props.description}</td>
                {/* <td>{props.url}</td> */}
                <td><button className="community_button" onClick={() => props.handleHighlight(props.id)}>buy now</button></td>
            </tr>
        </div>
    );

}

export default Book;

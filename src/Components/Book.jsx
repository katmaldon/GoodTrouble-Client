import React from 'react';

const Book = (props) => {


    return (
        <div>
            <tr>
                <td>{props.title}</td>
                <td>{props.description}</td>
                {/* <td>{props.url}</td> */}
                <td><button className="community_button" onClick={() => props(props.id)}>buy now</button></td>
            </tr>
        </div>
    );

}

export default Book;

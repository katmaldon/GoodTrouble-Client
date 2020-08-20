import React from 'react';

const Book = (props) => {


    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.description}</td>
            <td><button className="community_button" onClick={() => props(props.id)}><a href="https://www.booksaremagic.net/?searchtype=keyword&qs=new+jim+crow&qs_file=&q=h.tviewer&using_sb=status&qsb=keyword">buy now</a></button></td>
        </tr>
    );

}

export default Book;

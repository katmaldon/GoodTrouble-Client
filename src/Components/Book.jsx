import React from 'react';

const Book = (props) => {


    return (
        <tr>
            <td>{props.title}</td>
            <td><h4 className="url"><a href="https://en.wikipedia.org/wiki/John_Lewis">{props.author}</a></h4></td>
            <td>{props.description}</td>
            <td><button className="button" onClick={() => props(props.id)}><a href="https://www.booksaremagic.net/?searchtype=keyword&qs=new+jim+crow&qs_file=&q=h.tviewer&using_sb=status&qsb=keyword">buy now</a></button></td>
        </tr>
    );

}

export default Book;

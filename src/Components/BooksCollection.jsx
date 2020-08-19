import React from "react";
import Book from "./Book";

const BooksCollection = (props) => {

    return (
        <table className="books_table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">title</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">author</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">order online</h3>
                    </th>
                </tr>
                {props.books.map(book =>
                    <Book key={book.id}
                        {...book}
                        handleBuy={props.handleBuy}
                    />)}
            </tbody>
        </table>
    );
};

export default BooksCollection;

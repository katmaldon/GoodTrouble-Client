import React from "react";
import Book from "./Book";

const BooksCollection = (props) => {

    return (
        <div className="book_cards">
            {props.books.map(book =>
                <Book key={book.id}
                    {...book}
                />
            )}
        </div>
    );
};

export default BooksCollection;

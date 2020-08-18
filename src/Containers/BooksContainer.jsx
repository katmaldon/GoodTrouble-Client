import React from 'react';
import BooksCollection from '../Components/BooksCollection';

class BooksContainer extends React.Component {

    state = {
        books: [],
    }

    fetchBooks = () => {
        fetch('http://localhost:3000/books')
            .then(r => r.json())
            .then(books => {
                this.setState({ books });
            });
    };

    componentDidMount() {
        this.fetchBooks()
    };

    handleBuy = (id) => {
        let buyBook = this.state.books.map(book => {
            if (book.id === id) {
                return book.url
            }
        })
        return buyBook
    }


    render() {
        return (
            <div classname="books_container">
            <div className="media_title"><h2>Books</h2></div>
                <BooksCollection
                    books={this.state.books}
                    handleBuy={this.handleBuy}
                />
            </div>
        );
    };
};

export default BooksContainer;



import React from 'react';
import BooksCollection from '../Components/BooksCollection';

class BooksContainer extends React.Component {

    state = {
        books: []
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


    render() {
        return (
            <div>
                <BooksCollection
                    books={this.state.books}
                />
            </div>
        );
    };
};

export default BooksContainer;



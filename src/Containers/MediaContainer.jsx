import React from 'react';
import BooksContainer from './BooksContainer';
import VideosContainer from './VideosContainer'
import TwitterContainer from './TwitterContainer'

class MediaContainer extends React.Component {

    render() {
        return (
            <div>
                <div><h2>"Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible."</h2></div>
                <div><h3>Dr. Maya Angelou</h3></div>
                <br></br>
                <div classname="media_container">
                    <VideosContainer />
                    <BooksContainer />
                    <TwitterContainer />
                </div>
            </div>
        );
    };
};

export default MediaContainer;

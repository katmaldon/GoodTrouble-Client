import React, { Component } from 'react';
import FavoritesCollection from '../Components/FavoritesCollection'

class FavoritesContainer extends Component {

    render() {
        return (

            <div className="fav-container">
                <div className="media_title"><h2>Bookmarked Events & Resources</h2></div>
                {/* <FavoritesCollection /> */}
            </div>
        );
    }
}

export default FavoritesContainer;

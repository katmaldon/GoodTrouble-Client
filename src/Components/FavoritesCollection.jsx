import React from "react";
import Favorite from "./Favorite";

const FavoritesCollection = (props) => {

    return (

        <table className="favs_table">
            <tbody>
                <tr>
                    <th>
                        <h4 className="ui center aligned header">event/resource</h4>
                    </th>
                    <th>
                        <h4 className="ui center aligned header">details</h4>
                    </th>
                    <th>
                        <h4 className="ui center aligned header">website</h4>
                    </th>
                    <th>
                        <h4 className="ui center aligned header">remove</h4>
                    </th>

                </tr>
                {props.events.map(fav =>
                    <Favorite key={fav.id}
                        {...fav}
                        removeFavorite={props.removeFavorite}
                    />)}
            </tbody>
        </table>
    );
};

export default FavoritesCollection;

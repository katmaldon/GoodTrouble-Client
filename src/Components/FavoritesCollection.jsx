import React from "react";
import Favorite from "./Favorite";

const FavoritesCollection = (props) => {

    return (

        <table className="favs_table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">title</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">website</h3>
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

import React from "react";
import Petition from "./Petition";

const PetitionsCollection = (props) => {

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">cause</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">recipient</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">signed</h3>
                    </th>
                </tr>
            {props.petitions.map(petition => <Petition key={petition.id} {...petition} handleSign={props.handleSign} />)}
            </tbody>
        </table>
    );
};

export default PetitionsCollection;

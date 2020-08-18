import React from "react";
import Donation from "./Donation";

const DonationsCollection = (props) => {

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">organization</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">url</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">donated</h3>
                    </th>
                </tr>
            {props.donations.map(donation => <Donation key={donation.id} {...donation} handleDonate={props.handleDonate} />)}
            </tbody>
        </table>
    );
};

export default DonationsCollection;

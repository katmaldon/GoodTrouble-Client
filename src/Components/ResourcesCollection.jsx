import React from "react";
import Resource from "./Resource";

const ResourcesCollection = (props) => {

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3 className="ui center aligned header">resource</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">url</h3>
                    </th>
                </tr>
            {props.resources.map(resource =>
            <Resource key={resource.id}
            {...resource}
            handleHighlight={props.handleHighlight}

            />)}
            </tbody>
        </table>
    );
};

export default ResourcesCollection;

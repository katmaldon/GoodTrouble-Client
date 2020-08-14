import React from "react";
import Resource from "./Resource";

const ResourcesCollection = (props) => {

//     return (
//         <div className="resources_table">
//             {props.resources.map(event =>
//                 <Resource key={event.id}
//                     {...event}
//                 // handleDelete={this.props.handleDelete}
//                 // deleteEvent={this.props.deleteEvent}
//                 // handleLike={this.props.handleLike}
//                 />
//             )}
//         </div>
//     );
// };

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
            {props.resources.map(resource => <Resource key={resource.id} {...resource} handleHighlight={props.handleHighlight} />)}
            </tbody>
        </table>
    );
};

export default ResourcesCollection;

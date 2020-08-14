import React from "react";
import Event from "./Event";



const EventsCollection = (props) => {

    return (
        <div className="events_table">
            {props.events.map(event =>
                <Event key={event.id}
                    {...event}
                    handleFavorite={props.handleFavorite}
                    favoriteEvent={props.favoriteEvent}
                />
            )}
        </div>
    );
};

//     return (
//         <table className="ui celled striped padded table">
//             <tbody>
//                 <tr>
//                     <th>
//                         <h3 className="ui center aligned header">event</h3>
//                     </th>
//                     <th>
//                         <h3 className="ui center aligned header">description</h3>
//                     </th>
//                     <th>
//                         <h3 className="ui center aligned header">date</h3>
//                     </th>
//                     <th>
//                         <h3 className="ui center aligned header">time</h3>
//                     </th>
//                     <th>
//                         <h3 className="ui center aligned header">place</h3>
//                     </th>
//                     <th>
//                         <h3 className="ui center aligned header">url</h3>
//                     </th>
//                 </tr>
//                 {props.events.map(event =>
//                 <Event key={event.id}
//                 {...event}
//                 handleLike={props.handleLike} />)
//                 </tr
//             </tbody>
//         </table>
//     );
// };

export default EventsCollection;

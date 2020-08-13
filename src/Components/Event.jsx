import React from "react";

const Event = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.date}</td>
      <td>{props.time}</td>
      <td>{props.location}</td>
      <td>{props.url}</td>
      {/* <td><button onClick={() => props.handleFavorite(props.id)}>DELETE</button></td> */}
    </tr>
  );
};

export default Event;

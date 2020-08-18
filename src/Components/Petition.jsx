import React from 'react';

const Petition = (props) => {

    return (
        <div className="petitions_list">
            <tr>
                <td>{props.cause}</td>
                <td>{props.description}</td>
                <td>{props.to}</td>
                <td>{props.url}</td>
                <td><button className="community_button" onClick={() => props.handleSign(props.id)}>signed?</button></td>
            </tr>
        </div>
    );

}

export default Petition;

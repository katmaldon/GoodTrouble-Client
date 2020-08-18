import React from 'react';
import DonationsContainer from '../Containers/DonationsContainer';
import PetitionsContainer from '../Containers/PetitionsContainer';

class ActNowContainer extends React.Component {

    render() {
        return (
            <div>
                <div><h2>"In the end, we will remember not the words of our enemies, but the silence of our friends."</h2></div>
                <div><h3>Dr. Martin Luther King, Jr.</h3></div><br></br>
                <div className="act-now">
                    <PetitionsContainer />
                    <DonationsContainer />
                </div>
            </div>
        );
    };
};

export default ActNowContainer;

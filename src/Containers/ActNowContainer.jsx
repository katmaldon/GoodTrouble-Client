import React from 'react';
import PetitionsContainer from '../Components/PetitionsContainer';
import DonationsContainer from '../Components/DonationsContainer';

class ActNowContainer extends React.Component {

   render() {
        return (
            <div>
                <DonationsContainer/>
                <PetitionsContainer/>
            </div>
        );
    };
};

export default ActNowContainer;

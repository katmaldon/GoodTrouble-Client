import React from 'react';
import EventsContainer from '../Components/EventsContainer';
import ResourcesContainer from '../Components/ResourcesContainer';

class CommunityContainer extends React.Component {

   render() {
        return (
            <div>
                <EventsContainer/>
                <ResourcesContainer/>
            </div>
        );
    };
};

export default CommunityContainer;

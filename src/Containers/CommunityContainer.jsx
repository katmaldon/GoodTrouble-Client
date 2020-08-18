import React from 'react';
import EventsContainer from './EventsContainer';
import ResourcesContainer from './ResourcesContainer';

class CommunityContainer extends React.Component {

    render() {
        return (
            <div>
                <div><h2>"Not everything that is faced can be changed, but nothing can be changed until it is faced."</h2></div>
                <div><h3>James Baldwin</h3></div>
                <div classname="community_container">
                    <EventsContainer />
                    <ResourcesContainer />
                </div>
            </div>
        );
    };
};

export default CommunityContainer;

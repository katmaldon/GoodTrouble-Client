import React from 'react';
import ResourcesCollection from '../Components/ResourcesCollection';
import { Link } from 'react-router-dom';

class ResourcesContainer extends React.Component {

    state = {
        resources: []
    }

    fetchResources = () => {
        fetch('http://localhost:3000/resources')
            .then(r => r.json())
            .then(resources => {
                this.setState({ resources });
            });
    };

    componentDidMount() {
        this.fetchResources()
    };

    highlightResource = (id) => {
        let highlightedArr = this.state.resources.map(resource => {
            if (resource.id === id) {
                resource.favorite = !resource.favorite
                return (resource)
            }
            else { return resource }
        })
        this.setState({
            resources: highlightedArr
        })
    }

    handleHighlight = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                favorite: !this.props.favorite
            })
        }

        fetch(`http://localhost:3000/resources/${id}`, options)
            .then(res => res.json())
            .then(e => {
                this.highlightResource(id)
            })
    };

    render() {
        return (
            <div>
                <div className="resources_container">
                    <div className="community_title"><h2>Community Resources & Legal Help</h2></div>
                    <ResourcesCollection
                        resources={this.state.resources}
                        handleHighlight={this.handleHighlight}
                        highlightResource={this.highlightResource}
                    />
                </div>
                <button className="community_button"><Link to="/profile">go to favorites</Link></button>
            </div>
        );
    };
};

export default ResourcesContainer;



import React from 'react';
import PetitionsCollection from '../Components/PetitionsCollection';

class PetitionsContainer extends React.Component {
    state = {
        petitions: []
    }

    fetchPetitions = () => {
        fetch('http://localhost:3000/petitions')
            .then(r => r.json())
            .then(petitions => {
                this.setState({ petitions });
            });
    };

    componentDidMount() {
        this.fetchPetitions()
    };

    render() {
        return (
            <div>
                <PetitionsCollection
                    petitions={petitions}
                />
            </div>
        );
    };
};

export default PetitionsContainer;

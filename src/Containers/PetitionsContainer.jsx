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

    signPetition = (id) => {
        let signedPetitions = this.state.petitions.map(petition => {
            if (petition.id === id) {
                petition.signed = !petition.signed
                return (petition)
            }
            else { return petition }
        })
        this.setState({
            petitions: signedPetitions
        })
    }

    handleSign = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                signed: !this.props.signed
            })
        }

        fetch(`http://localhost:3000/petitions/${id}`, options)
            .then(res => res.json())
            .then(e => {
                this.signPetition(id)
            })
    };

    render() {
        return (
            <div className="petitions-container">
                <div className="media_title"><h2>Petitions</h2></div>
                <PetitionsCollection
                    petitions={this.state.petitions}
                    handleSign={this.handleSign}
                    signPetition={this.signPetition}
                />
            </div>

        );
    };
};

export default PetitionsContainer;


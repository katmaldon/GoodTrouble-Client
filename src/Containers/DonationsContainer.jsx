import React from 'react';
import DonationsCollection from '../Components/DonationsCollection';

class DonationsContainer extends React.Component {
    state = {
        donations: []
    }

    fetchDonations = () => {
        fetch('http://localhost:3000/donations')
            .then(r => r.json())
            .then(donations => {
                this.setState({ donations });
            });
    };

    componentDidMount() {
        this.fetchDonations()
    };

    render() {
        return (
            <div>
                <DonationsCollection
                    donations={donations}
                />
            </div>
        );
    };
};

export default DonationsContainer;

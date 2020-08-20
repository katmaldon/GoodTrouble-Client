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

    markDonated = (id) => {
        let donatedArr = this.state.donations.map(donation => {
            if (donation.id === id) {
                donation.donated = !donation.donated
                return (donation)
            }
            else { return donation }
        })
        this.setState({
            donations: donatedArr
        })
    }

    handleDonate = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                donated: !this.props.donated
            })
        }

        fetch(`http://localhost:3000/donations/${id}`, options)
            .then(res => res.json())
            .then(e => {
                this.markDonated(id)
            })
    };

    render() {
        return (
            <div className="donations-container">
                <div className="community_title"><h2>Donations</h2></div>
                <DonationsCollection
                    donations={this.state.donations}
                    handleDonate={this.handleDonate}
                    markDonated={this.markDonated}
                />
            </div>

        );
    };
};

export default DonationsContainer;


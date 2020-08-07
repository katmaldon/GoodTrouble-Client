import React from 'react';
import User from '../Components/User'


class UserContainer extends React.Component {

    fetchUsers = () => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(users => {
                this.setState({ users });
            });
    };
    componentDidMount() {
        this.fetchUsers()
    }


    render() {

        return (
            <div>
                <User />
            </div>
        );
    };

}

export default UserContainer;

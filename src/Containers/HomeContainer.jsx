import React from 'react';
//import Signup from '../Components/Signup'
import Auth from '../Components/Auth'


class HomeContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="quote"><h2>"You must be bold, brave, and courageous and find a way... to get in the way."</h2></div>
                <div><h3>Rep. John Lewis</h3></div>
                <div className="welcome_blurb"><p>Welcome to Good Trouble, a community for organizers and activists, providing to change the status quo for a better, more equitable future.</p></div>

                    <div className="auth">
                        <Auth
                            props={this.props}
                        />
                    </div>
            </div>
        );
    }

}

export default HomeContainer;

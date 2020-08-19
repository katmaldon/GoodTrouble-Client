import React from 'react';
//import Signup from '../Components/Signup'
import Auth from '../Components/Auth'


class HomeContainer extends React.Component {

    render() {
        return (
            <div>
                <div><h2>"You must be bold, brave, and courageous and find a way... to get in the way."</h2></div>
                <div><h3>Rep. John Lewis</h3></div>
                <br></br>
                <div className="auth">
                    <Auth />
                </div>
            </div>
        );
    }

}

export default HomeContainer;

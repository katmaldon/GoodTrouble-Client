import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div>
                <div><h2>"The function of freedom is to free someone else."</h2></div>
                <div><h3>Toni Morrison</h3></div>
                <br></br>
                <div className="about">
                    <h3>What is Good Trouble?</h3>
                    <p>Good Trouble is a collection of information for community organizers and activists to stay informed and engaged with current events, petitions, community resources, and fundraisers.</p><br></br>
                    <p>“Get in good trouble, necessary trouble, and help redeem the soul of America.”<br></br>{"Rep. John Lewis (1940 - 2020)"}</p>
                </div>
                    <div><p className="url">Questions? Concerns? Contact us.</p></div>

            </div>
        );
    }

}

export default About;


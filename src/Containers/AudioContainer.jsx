import React from 'react';
import AudiosCollection from '../Components/AudiosCollection';

class AudioContainer extends React.Component {
    state = {
        audios: []
    }

    fetchAudios = () => {
        fetch('http://localhost:3000/audios')
            .then(r => r.json())
            .then(audios => {
                this.setState({ audios });
            });
    };

    componentDidMount() {
        this.fetchAudios()
    };

    render() {
        return (
            <div>
                <AudiosCollection
                    audios={audios}
                />
            </div>
        );
    };
};

export default AudioContainer;

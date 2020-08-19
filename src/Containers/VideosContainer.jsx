import React from 'react';
import VideosCollection from '../Components/VideosCollection';

class VideosContainer extends React.Component {

    state = {
        videos: []
    }

    fetchVideos = () => {
        fetch('http://localhost:3000/videos')
            .then(r => r.json())
            .then(videos => {
                this.setState({ videos });
            });
    };

    componentDidMount() {
        this.fetchVideos()
    };

    render() {
        return (
            <div className="videos_container">
                <div className="media_title"><h2>Notable Speeches</h2></div>
                <VideosCollection
                    videos={this.state.videos}
                />
            </div>
        );
    };
};

export default VideosContainer;

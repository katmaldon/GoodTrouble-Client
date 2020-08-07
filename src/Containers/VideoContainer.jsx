import React from 'react';
import VideoCollection from '../Components/VideoCollection';

class VideoContainer extends React.Component {
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
            <div>
                <VideoCollection
                    videos={videos}
                />
            </div>
        );
    };
};

export default e;

import React from 'react';
import AudioContainer from '../Components/AudioContainer';
import BooksContainer from '../Components/BooksContainer';
import VideoContainer from '../Components/VideoContainer';

class MediaContainer extends React.Component {

   render() {
        return (
            <div>
                <BooksContainer/>
                <AudioContainer/>
                <VideoContainer/>
            </div>
        );
    };
};

export default MediaContainer;

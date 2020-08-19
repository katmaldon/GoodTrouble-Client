import React from "react";
import Video from "./Video";

const VideosCollection = (props) => {

    return (
        <div className="videos_collection">
            {/* {props.videos.map(video => <Video key={video.id} {...video} />)} */}
            <Video />
        </div>
    );
};

export default VideosCollection;

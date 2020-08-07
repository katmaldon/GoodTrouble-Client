import React from "react";
import Video from "./Video";

const VideosCollection = (props) => {

    return (
        <div className="video_cards">
            {props.videos.map(video =>
                <Video key={video.id}
                    {...video}
                />
            )}
        </div>
    );
};

export default VideosCollection;

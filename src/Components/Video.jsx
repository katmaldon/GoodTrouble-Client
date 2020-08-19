import React from "react"
import ReactPlayer from "react-player"

function Video() {
    return (
        <div className="videos_collection">
            <div className="video">
                <ReactPlayer

                    url="https://youtu.be/tFs1eTsokJg"
                    width={300}
                    height={200}

                />
            </div>
            <div className="video">
                <ReactPlayer
                    url="https://youtu.be/6_uYWDyYNUg"
                    width={300}
                    height={200}
                />
            </div><br></br>
            <div className="video">
                <ReactPlayer
                    url="https://youtu.be/oFeoS41xe7w"
                    width={300}
                    height={200}
                />
            </div>
        </div>
    )
}

export default Video;

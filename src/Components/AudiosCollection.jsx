import React from "react";
import Audio from "./Audio";

const AudiosCollection = (props) => {

    return (
        <div className="audio_cards">
            {props.audios.map(audio =>
                <Audio key={audio.id}
                    {...audio}
                />
            )}
        </div>
    );
};

export default AudiosCollection;

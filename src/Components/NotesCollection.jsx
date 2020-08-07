import React from "react";
import Note from "./Note";

const NotesCollection = (props) => {

    return (
        <div className="note_cards">
            {props.notes.map(note =>
                <Note key={note.id}
                    {...note}
                    handleLike={props.handleLike}
                />
            )}
        </div>
    );
};

export default NotesCollection;

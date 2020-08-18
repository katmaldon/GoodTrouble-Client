import React, { Component } from 'react';

class Note extends Component {

    render() {
        return (
            <div className="note">
                <div className="notes_content">
                    <div>
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;

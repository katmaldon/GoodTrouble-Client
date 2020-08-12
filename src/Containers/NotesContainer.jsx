
import React from 'react';
import NotesCollection from '../Components/NotesCollection'
import NotesForm from '../Components/NotesForm'

class NotesContainer extends React.Component {

    state = {
        notes: []
    }

    fetchNotes = () => {
        fetch('http://localhost:3000/notes')
            .then(r => r.json())
            .then(notes => {
                this.setState({ notes });
            });
    };

    componentDidMount() {
        this.fetchNotes()
    };

    addNote = (note) => {
        let newNotes = [...this.state.notes, note];
        this.setState({
            notes: newNotes,
        });
    };

    completeNote = (id) => {
        let updatedNotes = this.state.notes.map(note => {
            if (note.id === id) {
                note.completed = !note.completed
                return (note)
            }
            else { return note }
        })
        this.setState({
            notes: updatedNotes
        })
    }

    handleComplete = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                completed: !this.props.completed
            })
        }

        fetch(`http://localhost:3000/notes/${id}`, options)
            .then(res => res.json())
            .then(e => {
                this.completeNote(id)
            })
    };

    deleteNote = id => {
        let newNotes = this.state.notes.filter(note => { return note.id !== id })
        this.setState({
            notes: newNotes
        })
    };

    handleDelete = (id) => {
        const options = {
            method: "DELETE"
        }
        fetch(`http://localhost:3000/notes/${id}`, options)
            .then(r => r.json())
            .then(this.fetchNotes)
    };



    render() {

        return (
            <div>
                <NotesCollection
                    deleteNote={this.deleteNote}
                    handleDelete={this.handleDelete}
                    completeNote={this.completeNote}
                    handleComplete={this.handleComplete}
                />
                <NotesForm
                    addNote={this.addNote}
                />
            </div>
        );
    };
};


export default NotesContainer;

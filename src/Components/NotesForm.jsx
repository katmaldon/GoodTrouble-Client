import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class NotesForm extends React.Component {

    state = {
        showForm: false,
        text: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/notes', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                text: this.state.text,
                user_id: this.state.user_id
            }),
        })
            .then((r) => r.json())
            .then((newNote) => {
                this.props.addNote(newNote);
                this.setState({
                    text: "",
                    user_id: null
                })
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleForm = (e) => {
        e.preventDefault()
        this.setState(prevState => ({ showForm: !prevState.showForm }))
    }

    renderFront = () => {
        return (
            <>
                <div className="notes_form_front" onClick={this.toggleForm}>
                    <button className="button" >create new note</button>
                </div>
            </>
        )
    };

    renderBack = () => {
        return (
            <>
                <div>
                    <Form className="new_note" onSubmit={this.handleSubmit}>
                        <Form.Group unstackable widths={2}>
                            <Form.Input
                                label='Note: '
                                placeholder='remember, remember...'
                                name="text"
                                valueOf={this.state.text}
                                onChange={this.handleChange}
                            />
                            <Button className="form_button" type='submit'>add note</Button>
                        </Form.Group>
                    </Form>
                </div>
            </>
        )
    }

    render() {

        return (
            <Form.Field>
                <div className="notes_form" >
                    {this.renderFront()}
                    {this.state.showForm ? this.renderBack() : null}
                </div>
            </Form.Field>

        );
    };
}

export default NotesForm;



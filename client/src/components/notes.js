import React, { Component } from 'react'

export class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes : []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(notes => this.setState({notes}, () => console.log("fetched")))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Notes</h1>
                <ul>
                    {this.state.notes.map(note =>
                        <li key={note.id}>
                            <h4>{note.title}</h4>
                            <p>{note.desc}</p>
                        </li>
                        )}
                </ul>
            </div>
        )
    }
}

export default Notes

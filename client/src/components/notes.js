import React, { Component } from 'react';
import axios from 'axios';
import './notes.css';

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

    handleDelete(e, id){
        //console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id);
        //const target = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        console.log(id);
        axios.delete(`https://localhost:5000/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="listComp">
                    <h3>Notes List</h3>
                    <ul className="notesList">
                        {this.state.notes.map(note =>
                            <li key={note._id} id={note._id}>    
                                <div className="card">
                                    <div className="container">
                                        <div className="row"> 
                                            <div className="pl-2 py-2 col">
                                                <h6 className="card-title">{note.title}</h6>
                                                <p className="card-text">{note.desc}</p>
                                            </div>
                                            <div className="col-1 mt-2">
                                                <button onClick={this.handleDelete(note._id)} className="btn btn-outline-danger btn-sm"> Delete </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </li>
                            )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Notes

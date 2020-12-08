import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            desc: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInput(e){
        //console.log(e.target.id, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleButtonClick(){
        const newNote = {
            title: this.state.title,
            desc: this.state.desc
        };
        console.log(newNote);
        axios.post('http://localhost:5000/', newNote)
            .then(res => {
                console.log(res);
            })
            .catch(err =>console.log(err));

        this.setState({
            title: "",
            desc: ""
        })
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" onChange={this.handleInput} value={this.state.title} type="text" id="title" name="title" placeholder="title.." />
                    </div>
                    <div class="form-group">
                        <label for="desc">Description</label>
                        <textarea class="form-control" onChange={this.handleInput} value={this.state.desc} id="desc" name="desc" rows="5" placeholder="write details.."></textarea>
                    </div>
                    <button onClick={this.handleButtonClick} type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Create

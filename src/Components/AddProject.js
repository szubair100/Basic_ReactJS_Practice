import React, { Component } from 'react';
import uuid from'uuid';
//import ProjectItem from './ProjectItem';
//import logo from './logo.svg';
//import './App.css';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'General Development', 'Managerial', 'Mobile Development']
    }
    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is REQUIRED!')
        } else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                console.log('Form [id: ',this.state.newProject.id,
                ', title: ', this.state.newProject.title,
                ', category: ', this.state.newProject.category, ' ]');
                this.props.addProject(this.state.newProject);
            });
            
        }
        e.preventDefault();
    }
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key ={category} value={category}>{category}</option>
        });
        return (
        <div>
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label><br/>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Category</label><br/>
                    <select ref="category">
                        {categoryOptions}
                    </select>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        );
    }
}


export default AddProject;

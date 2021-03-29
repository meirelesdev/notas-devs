import axios from "axios";
import { Component } from "react";

import Form from '../formulario/todoForm'
import TodoList from './todoList'

const URL = 'http://localhost/pessoal/devsnotesAPI/api'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { title: '', body: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(URL+'/').then(res => this.setState({
                    ...this.state,
                    title:'',
                    body: '',
                    list: res.data.result }))
    }

    handleAdd(event) {
        event.preventDefault()
        const data = {
                title:this.state.title,
                body:this.state.body
                }
        axios.post(URL+'/cadastrar', data )
                .then(res => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/deletar/?id=${todo.id}`)
        .then(res => this.refresh())

    }

    handleEdit(todo){
        
    }

    handleChange(event) {
        
        if(event.target.name === 'title'){
            this.setState({...this.state, title: event.target.value})
        }
        if(event.target.name === 'body'){
            this.setState({...this.state, body: event.target.value})
        }
        
    }

    render() {
        return(
            <div>
                <Form 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    title={this.state.title}
                    body={this.state.body}
                />
                <TodoList list={this.state.list}
                    handleEdit={this.handleEdit}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}
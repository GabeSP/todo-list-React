import React, { Component } from 'react';
import '../App';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {todoList : [], item: '',};
    this.sendTodo = this.sendTodo.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }
  
  onTextChange(event) {
    this.setState({ item:event.target.value });
  }

  sendTodo(event) {
    event.preventDefault();
    this.setState({
      item: '',
      todoList: [...this.state.todoList, this.state.item]
    });
  }

  render() {

    return (
      <div className='root'>
        <FormControl>
          <Card className='card'> 
              <CardContent>
                <Typography variant='headline' className='title' component='h1'>Todo List</Typography>
                <br />                 
                <form className='form' onSubmit={this.sendTodo} method='post'>
                  <TextField
                    id='item'
                    type='text'
                    name='item'
                    value={this.state.item}
                    onChange={this.onTextChange}
                    label = 'What you want to do?'
                    className='textField'
                  />
                  <Button type='submit' variant="contained" className='button'>Add</Button>
                </form>
                <br/>
                <TodoList todoList={this.state.todoList}/>
              </CardContent>
          </Card>
        </FormControl>
      </div>
    )
  }
}

export default TodoForm;

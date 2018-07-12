import React, { Component } from 'react';
import '../App';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {todoList : [], item: '', disabled: false,};

    this.sendTodo = this.sendTodo.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  
  onTextChange(event) {
    this.setState({ item:event.target.value });
  }

  sendTodo(event) {
    const { todoList, item } = this.state;
    event.preventDefault();
    if(item === '') {
      console.log('invalido');
      this.setState({error: true});
    } else {
      todoList.push({title: item, isDone: false});
      this.setState({
        item: '',
        todoList: todoList,
        error: false
      });
    }
  }

  onClickDone(e) {
    const { todoList } = this.state;
    let title = e.target.parentElement.parentElement.title;
    let itemFiltred = todoList.filter(item => item.title === title)[0].isDone;
    todoList.filter(item => item.title === title)[0].isDone = !itemFiltred;
    this.setState({ todoList: todoList, disabled: true });
  }

  render() {
    const { onClickDone } = this;
    const { todoList, disabled, error } = this.state;
    return (
      <div className='root'>        
        <form className='form' onSubmit={this.sendTodo} method='post'>
          <TextField
            id='item'
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.onTextChange}
            label = 'What you want to do?' 
            className='textField'
            error={error}
          />
          <Button type='submit' variant="contained" className='button'>Add</Button>
          <span></span>
        </form>
        <br/>
        <TodoList todoList={todoList} onClickDone={onClickDone} disabled={disabled} />
      </div>    
    )
  }
}

export default TodoForm;

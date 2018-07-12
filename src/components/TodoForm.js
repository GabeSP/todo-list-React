import React, { Component } from 'react';
import '../App';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TodoList from './TodoList';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {todoList : [], item: ''};

    this.sendTodo = this.sendTodo.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  
  onTextChange(event) {
    this.setState({ item:event.target.value });
  }

  sendTodo(event) {
    const uniqueID = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    const { todoList, item } = this.state;
    event.preventDefault();
    if(item === '') {
      console.log('invalido');
      this.setState({error: true});
    } else {
      todoList.push({id: uniqueID(), title: item, isDone: false });
      this.setState({
        item: '',
        todoList: todoList,
        error: false
      });
    }
  }


  onClickDone(e) {
    const { todoList } = this.state;
    console.log('# e',e.target);
    let title = e.target.parentElement.parentElement.title;
    console.log(title);
    let itemFiltred = todoList.filter(item => item.id === title)[0].isDone;
    todoList.filter(item => item.id === title)[0].isDone = !itemFiltred;
    this.setState({ todoList: (todoList) });
  }

  render() {
    const { onClickDone } = this;
    const { todoList, error } = this.state;
    return (
      <div className='root'>        
        <form className='form' onSubmit={this.sendTodo} method='post'>
          <TextField
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.onTextChange}
            label = 'What you want to do?' 
            className='textField'
            error={error}
          />
          <Button type='submit' variant="contained" className='button'>Add</Button>
        </form>
        <br/>
        <TodoList todoList={todoList} onClickDone={onClickDone} />
      </div>    
    )
  }
}

export default TodoForm;

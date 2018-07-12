import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../App';

class TodoList extends Component {

  render() {
    const { todoList, onClickDone } = this.props;
    return (
      <div>
        <ul className='listStyle'>
          {
            todoList.map((item, index) =>
            <li key={index} className={item.isDone ? 'isDone' : null}>
              <FormControlLabel
                id={item.index}    
                onChange={onClickDone} 
                control={<Checkbox title={item.id}/>}
                disabled={item.isDone}
                label={item.title} />
            </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;





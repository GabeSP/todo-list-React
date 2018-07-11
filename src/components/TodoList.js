import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../App';


const TodoList = ({todoList}) => (
  
  <ul className='listStyle'>
    {
      todoList && todoList.map((item, index) =>
      <li key={index}>
        <FormControlLabel control={<Checkbox />} label={item} />
      </li>
    )
    }
  </ul>
);
export default TodoList;
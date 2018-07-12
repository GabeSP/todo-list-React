import React, { Component } from 'react'
import '../App';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TodoForm from './TodoForm';

export default class Container extends Component {
  render() {
    return (
        <div className='root'>
        <FormControl>
          <Card className='card'> 
              <CardContent>
                <Typography variant='headline' className='title' component='h1'>Todo List</Typography>
                <br />
                <TodoForm />
              </CardContent>
          </Card>
        </FormControl>
      </div>
    )
  }
}

import React, { Component } from 'react';
import $ from 'jquery';
import PubSub from 'pubsub';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import { CardMedia } from '../../node_modules/@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  card: {
    width: '600px',
  },
  space: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: '400px',
  },
  spaceTextField:{
    margin: theme.spacing.unit,
    width: '400px',
  },
});

class TodoForm extends Component {

  state = {
    Text: '',
    checked: [0],
  };

  sendTodo(event) {

    event.preventDefault();
    $.ajax({
      url:'http://www.mocky.io/v2/5b4521ee2f00008100420ba3',
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      dat: JSON.stringify({todo:this.state.todo}),
      success: function(res) {
        PubSub.publish('update', res)
        this.setState({todo: ''});
      }.bind(this),
      error: function() {
        throw new Error ('Erro')
      }
    });
  }


  onTextChange(inputName, event) {
    var changeInput = {};
    changeInput[inputName] = event.target.value;
    this.setState(changeInput);
  }

  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl>
          <Card className={classes.card}>
            
              <CardContent>
                <Typography variant='headline' style={{color:'darkcyan', textAlign:'center'}} component='h1'>Todo List</Typography>
                <br />                 
                <CardMedia style={{textAlign: 'center'}}>
                  <TextField
                    id='todo'
                    type='text'
                    name='todo'
                    value={this.state.name}
                    onChange={this.onTextChange.bind(this, 'todo')}
                    label = 'What you want to do?'
                    className={classes.spaceTextField}
                  />
                  <Button type='submit' variant="contained" className={classes.space} style={{backgroundColor:"darkcyan", color:'white'}} >Add</Button>
                </CardMedia>
                <br/>
                <List>
                  <ListItem>
                      <Checkbox />
                    {/* {
                      this.props.list.map(item => (
                        <ListItemText>
                          {item.todo}
                        </ListItemText>
                      ))
                    } */}
                    <ListItemText>Do Anything</ListItemText>
                  </ListItem>
                  <ListItem>
                      <Checkbox />
                    <ListItemText>Do your goal</ListItemText>
                  </ListItem>
                  <ListItem>
                      <Checkbox />
                    <ListItemText>Do more something</ListItemText>
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(TodoForm);

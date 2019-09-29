import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, withStyles, TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import styled from 'styled-components';
import { signup } from '../store/user/actions';

const Page = styled.div`
    display: flex;
    align-items: center;
    padding: 100px 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const styles = {
  card: {
    maxWidth: 400,
    padding: 24,
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    margin: '20px 0 0'
  }
}



class Signup extends React.Component {
  state = {}
  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
    this.props.onSubmit(this.state);
  }
  render() {
    const { classes } = this.props;
    console.log(this.state)
    return (
      <Page>
        <Card className={classes.card}>
          <Typography variant="h5" component="h2">Register to Workers App</Typography>
          <Form onSubmit={this.onSubmitHandler}>
            <TextField
              name='name'
              type='text'
              label="Name"
              variant='outlined'
              margin="normal"
              onChange={this.onChangeHandler}
            />
            <TextField
              name='email'
              type='email'
              label="E-mail"
              variant='outlined'
              margin="normal"
              onChange={this.onChangeHandler}
            />
            <TextField
              name='password'
              type='password'
              label="Password"
              variant='outlined'
              margin="normal"
              onChange={this.onChangeHandler}
            />
            <Button type='submit' variant='contained' color='secondary' className={classes.button}>Submit</Button>
            <Typography className='flexbox align-center justify-right pt-20'>Have an account?<Link to='/login'><Button variant='text'>SignUp</Button></Link></Typography>
          </Form>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (user) => dispatch(signup(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Signup));
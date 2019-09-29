import React from 'react';
import { TextField, FormControl, Select, MenuItem, Button, withStyles, InputLabel, Typography } from '@material-ui/core';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 240,
    padding: 20
  },
  button: {
    marginTop: 20
  }
}

const EmployeeForm = ({
  classes,
  onSubmitHandler,
  onChangeHandler,
  user: {
    gender
  }
}) => {
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Typography>Eployee Data</Typography>

      <TextField
        name='name'
        type='text'
        label="Name"
        variant='outlined'
        margin="normal"
        onChange={onChangeHandler}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-gender-simple">
          Gender
        </InputLabel>
        <Select
          value={gender}
          onChange={onChangeHandler}
          // labelWidth={labelWidth}
          inputProps={{
            name: 'gender',
            id: 'outlined-gender-simple',
          }}
        >

          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name='email'
        type='email'
        label="E-mail"
        variant='outlined'
        margin="normal"
        onChange={onChangeHandler}
      />
      <TextField
        name='password'
        type='password'
        label="Password"
        variant='outlined'
        margin="normal"
        onChange={onChangeHandler}
      />
      <Button type='submit' variant='contained' color='secondary' className={classes.button}>Submit</Button>
    </form>
  );
}

export default withStyles(styles)(EmployeeForm);
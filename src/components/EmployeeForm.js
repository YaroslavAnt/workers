import React from 'react';
import { TextField, FormControl, Select, MenuItem, Button, withStyles, InputLabel, Typography } from '@material-ui/core';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 340,
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
  employee: {
    name,
    gender,
    salary,
    contacts,
    position
  }
}) => {
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Typography>Eployee Data</Typography>

      <TextField
        name='name'
        value={name}
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
        name='contacts'
        value={contacts}
        type='text'
        label="Contacts"
        variant='outlined'
        margin="normal"
        onChange={onChangeHandler}
      />

      <TextField
        name='salary'
        value={salary}
        type='text'
        label="Salary"
        variant='outlined'
        margin="normal"
        onChange={onChangeHandler}
      />

      <TextField
        name='position'
        value={position}
        type='text'
        label="Position"
        variant='outlined'
        margin="normal"
        onChange={onChangeHandler}
      />
      <Button type='submit' variant='contained' color='secondary' className={classes.button}>Submit</Button>
    </form>
  );
}

export default withStyles(styles)(EmployeeForm);
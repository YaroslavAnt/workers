import React from 'react';
import { connect } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import { Button, Dialog, Typography } from '@material-ui/core';
import { getAll } from '../store/employee/actions';
import EmployeeForm from '../components/EmployeeForm'

const styles = {
  root: {
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
    width: '100%',
  },
  dialog: {
    padding: 20
  }
}
const createData = (name, calories, fat) => {
  return { name, calories, fat };
}
const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

class Dashboard extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    openAdd: false,
    openUpdate: false,
    user: {

    }
  }

  componentDidMount() {
    this.props.getAll()
  }

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage
    })
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10)
    })
  };

  toggleOpenAdd = () => {
    this.setState({
      openAdd: !this.state.openAdd
    })
  }

  toggleOpenUpdate = () => {
    this.setState({
      openUpdate: !this.state.openUpdate
    })
  }

  render() {
    const { classes } = this.props;
    const { page, rowsPerPage, openAdd, user } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    console.log(this.state)
    return (
      <>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Paper>
        <Button variant='contained' color='primary' onClick={this.toggleOpenAdd}>Add Employee*</Button>
        <Dialog onClose={this.toggleOpenAdd} open={openAdd} className={classes.dialog}>
          <EmployeeForm
            user={user}
            onSubmitHandler={this.addEmplyee}
            onChangeHandler={this.onChangeHandler}
          />
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(getAll()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));


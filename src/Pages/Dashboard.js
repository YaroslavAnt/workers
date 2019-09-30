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
import { Button, Dialog, Typography, TableHead, Fab } from '@material-ui/core';
import { getAll, create, update, deleteEmployee, confirmMsg } from '../store/employees/actions';
import EmployeeForm from '../components/EmployeeForm'
import moment from 'moment';
import Icon from '@material-ui/core/Icon';


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
    padding: 20,
    width: 400
  },
  fab: {
    width: 36,
    height: 36,
    margin: '0 4px'
  },
  mt20: {
    marginTop: 20
  }
}

class Dashboard extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    openAdd: false,
    openUpdate: false,
    openDelete: false,
    employee: {}
  }

  componentDidMount() {
    this.props.getAll()
  }



  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      employee: {
        ...this.state.employee,
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

  toggleOpenUpdate = (employeeId) => {
    const { employees: { employees } } = this.props;
    this.setState({
      openUpdate: !this.state.openUpdate,
      employee: employees.find(el => el._id === employeeId) || {}
    })
  }

  toggleOpenDelete = (employeeId) => {
    const { employees: { employees } } = this.props;

    this.setState({
      openDelete: !this.state.openDelete,
      employee: employees.find(el => el._id === employeeId) || {}
    })
  }

  addEmployee = (e) => {
    e.preventDefault();
    this.props.create({ ...this.state.employee, published_date: Date.now() });
    this.toggleOpenAdd();
  }

  updateEmployee = (e) => {
    const { employee } = this.state;
    e.preventDefault();
    this.props.update({ ...employee, published_date: Date.now() }, employee._id);
    this.toggleOpenUpdate()
  }

  deleteEmployee = (e) => {
    const { employee } = this.state;
    e.preventDefault();
    this.props.delete(employee._id);
    this.toggleOpenDelete()
  }

  confirmMsg = () => {
    this.props.confirmMsg();
    document.location.reload()
  }

  render() {
    const { classes, employees: { employees, message }, confirmMsg } = this.props;
    const { page, rowsPerPage, openAdd, openUpdate, openDelete, employee } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);

    return (
      <>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead >
                <TableRow>
                  <TableCell component='th' align="left">Name</TableCell>
                  <TableCell component='th' align="right">Position</TableCell>
                  <TableCell component='th' align="right">Gender</TableCell>
                  <TableCell component='th' align="right">Contacts</TableCell>
                  <TableCell component='th' align="right">From</TableCell>
                  <TableCell component='th' align="right">Salary</TableCell>
                  <TableCell component='th' align="right">Controlls</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {employees && employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(employee => (
                  <TableRow key={employee._id}>
                    <TableCell component='td' align="left">{employee.name}</TableCell>
                    <TableCell component='td' align="right">{employee.position}</TableCell>
                    <TableCell component='td' align="right">{employee.gender}</TableCell>
                    <TableCell component='td' align="right">{employee.contacts}</TableCell>
                    <TableCell component='td' align="right">{moment(employee.published_date).format('DD-MM-YY')}</TableCell>
                    <TableCell component='td' align="right">{employee.salary}</TableCell>
                    <TableCell component='td' align="right">
                      <Fab color="primary" aria-label="edit" className={classes.fab} onClick={() => this.toggleOpenUpdate(employee._id)}>
                        <Icon>edit</Icon>
                      </Fab>
                      <Fab color="secondary" aria-label="delete" className={classes.fab} onClick={() => this.toggleOpenDelete(employee._id)}>
                        <Icon>delete</Icon>
                      </Fab>
                    </TableCell>
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
                    count={employees.length}
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

        <Dialog onClose={this.toggleOpenAdd} open={openAdd} >
          <EmployeeForm
            employee={employee}
            onSubmitHandler={this.addEmployee}
            onChangeHandler={this.onChangeHandler}
          />
        </Dialog>

        <Dialog onClose={this.toggleOpenUpdate} open={openUpdate} >
          <EmployeeForm
            employee={employee}
            onSubmitHandler={this.updateEmployee}
            onChangeHandler={this.onChangeHandler}
          />
        </Dialog>

        <Dialog onClose={this.toggleOpenDelete} open={openDelete} >
          <Paper className={classes.dialog}>
            <Typography variant='h4'>Confirm delete {employee.name}</Typography>
            <Button variant='contained' color='secondary' className={classes.mt20} onClick={this.deleteEmployee}>Delete </Button>
          </Paper>
        </Dialog>

        <Dialog onClose={this.confirmMsg} open={message} >
          <Paper className={classes.dialog}>
            <Typography variant='h4' >{message}</Typography>
            <Button variant='contained' color='secondary' className={classes.mt20} onClick={this.confirmMsg}>Close </Button>
          </Paper>
        </Dialog>

      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(getAll()),
    create: (employee) => dispatch(create(employee)),
    update: (employee, employeeId) => dispatch(update(employee, employeeId)),
    delete: (employeeId) => dispatch(deleteEmployee(employeeId)),
    confirmMsg: () => dispatch(confirmMsg()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));


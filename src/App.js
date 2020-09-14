import React from 'react';
import './App.css';
import Customer from './Components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth : 1080
  }
})

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/128/128/1',
  'name' : '조정우',
  'birthday' : '960402',
  'gender' : '남자',
  'job' : '대학생'
}, 
{
  'id' : 2,
  'image' : 'https://placeimg.com/128/128/2',
  'name' : '홍길동',
  'birthday' : '960402',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/128/128/3',
  'name' : '이순신',
  'birthday' : '960402',
  'gender' : '남자',
  'job' : '대학생'
}
]

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {
            customers.map(customer => {
              return (
                <Customer 
                  key = {customer.id}
                  image = {customer.image}
                  name = {customer.name}
                  id = {customer.id}
                  birthday = {customer.birthday}
                  gender = {customer.gender}
                  job = {customer.job}
                  />
                )
            })
        }
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);

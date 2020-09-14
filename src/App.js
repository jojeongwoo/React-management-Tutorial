import React from 'react';
import './App.css';
import Customer from './Components/Customer';

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
    return (
      <div>
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
    </div>
    );
  }
}

export default App;

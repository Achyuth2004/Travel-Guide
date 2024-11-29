import React from 'react'
import UserList from '../components/UserList'
function Users() {
  const USERS=[{
    id:'406',
    name:'Achyuth',
    places:3,
    image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200',
  }];
  return (
    <UserList items={USERS}/>
  )
}

export default Users

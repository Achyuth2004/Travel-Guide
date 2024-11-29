import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './UserList.css';
import UserItem from './UserItem';

function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div className='centre'>
        <Card>
          <h2>No Records Found!</h2>
        </Card>
        
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image} // Note: Corrected 'Image' to 'image' to match the object property
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UserList;

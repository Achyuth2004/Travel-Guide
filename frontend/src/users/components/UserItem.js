import React from 'react'
import './UserItem.css'
import {Link} from 'react-router-dom'
import Avatar from '../../shared/components/UIElements/Avatar'
// import Card from '../../shared/components/UIElements/Card'
function UserItem(props) {
  return (
    <li className='user-item'>
      <div className='user-item_content'>
        {/* <Card> */}
        <Link to={`/${props.id}/places`}>
        <div className='user-item_image'>
          <Avatar image={props.image} alt={props.name}/>
        </div>
        <div className='user-item_info'>
          <h2>{props.name}</h2>
          <h3>{props.placeCount} {props.placeCount ===1 ?'Place':'Places'}</h3>
        </div>
        </Link>
        {/* </Card>*/}
      </div>
    </li>
  )
}

export default UserItem

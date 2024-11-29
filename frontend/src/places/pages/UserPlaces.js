import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES=[
{
  id:'p1',
  title:'ISKCON Temple',
  description:'One of the most famous temple in the world ',
  imageUrl:'https://lh5.googleusercontent.com/p/AF1QipPOifviKNT5tj5P89WrDYSnJ9qonh7fHPnT1y9-=w408-h258-k-no',
  address:'Hare Krishna Land, National Highway No.7, Somaladoddi, Andhra Pradesh 515001',
  location:{
    lng:'14.7191° N',
    lat:' 77.6040° E'
  },
  creator:'u1',
},
{
  id:'p2',
  title:'Tirumala Temple',
  description:'One of the most famous temple in the world and worshipped god',
  imageUrl:'https://lh5.googleusercontent.com/p/AF1QipN2uf1V_h1P19msnCcCRolBnJ62V24Ug0OtcZzm=w408-h272-k-no',
  address:'Tirupati , Andhra Pradesh ',
  location:{
    lng:'13.6288° N',
    lat:' 79.4192° E'
  },
  creator:'u2',

}
];

function UserPlaces() {
  const userId=useParams().userId;
  const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator===userId)
  return (

    <PlaceList items={loadedPlaces} />
  )
}

export default UserPlaces

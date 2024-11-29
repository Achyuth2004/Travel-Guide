import React,{useState} from 'react'

import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'

function PlaceItem(props) {
  const [showMap,setShowMap] = useState(false);
  const [showConfirmModal,setshowConfirmModal]=useState(false);
  const openMapHandler = ()=> setShowMap(true);
  const closeMapHandler= ()=> setShowMap(false);

  const showDeleteWarningHandler=()=>{
    setshowConfirmModal(true);
  }
  const cancelDeleteHandler=()=>{
    setshowConfirmModal(false);
  }
  const confirmDeleteHandler=()=>{
    setshowConfirmModal(false);
    console.log("Deleting....")
  }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
        <div className="map-container">
          <Map center={props.coordinates} zoom={14} />
        </div>
      </Modal>
      <Modal
       show={showConfirmModal}
       onCancel={cancelDeleteHandler}
       header="Are you sure?" footerClass="place-item__modal-actions" 
      footer={
        <React.Fragment>
          <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
          <Button danger onClick={confirmDeleteHandler}>Delete</Button>
        </React.Fragment>
      }>
         <pre>
          Do you want to delete! this place? Please note that action cannot be undone!.
         </pre>
      </Modal>
      <ul className='place-item'>
      <Card className="place-item_content">
      <div className='place-item_image'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='place-item_info'>
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <pre>{props.description}</pre>
      </div>
      <div className='place-item_actions'>
        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
        <Button to={`/places/${props.id}`}>EDIT</Button>
        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
      </div>
      </Card>
    </ul>
    </React.Fragment>
  )
}

export default PlaceItem
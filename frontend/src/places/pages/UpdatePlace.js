import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

import './PlaceForm.css'
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from  '../../shared/hooks/form-hook' 
import { useEffect } from 'react'

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

  const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;
  
    const [formState, inputHandler, setFormData] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      },
      false
    );
  
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  
    useEffect(() => {
      if (identifiedPlace) {
        setFormData(
          {
            title: {
              value: identifiedPlace.title,
              isValid: true
            },
            description: {
              value: identifiedPlace.description,
              isValid: true
            }
          },
          true
        );
      }
      setIsLoading(false);
    }, [setFormData, identifiedPlace]);
  
    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
  
    if (!identifiedPlace) {
      return (
        <div className="center">
          <Card>
            <h2>Could not find place!</h2>
          </Card>
        </div>
      );
    }
  
    if (isLoading) {
      return (
        <div className="center">
          <h2>Loading...</h2>
        </div>
      );
    }
  
    return (
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  
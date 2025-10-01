import React from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { MyModal } from './MyModal'

export const Tourcard = ({id,name,info,image,price}) => {
    const [jelenit, setJelenit] = useState(false)
    const [modal, setModal] = useState(false);

    
  return (
    <div className='tour-card'>
        
            <Card
        style={{
            backgroundColor:"rgba(21, 41, 58, 1)",
            color:"rgba(255, 255, 255, 0.99)",
            width:'100%',
            height:'100%',
        }}
        >
        <img
            className='tour-img'
            alt="Sample"
            src={image}
        />
        <CardBody style={{display:'flex',flexDirection:'column',alignItems:"start",justifyContent:"space-between"}}>
            <CardTitle tag="h5">
            {name}
            </CardTitle>
           
            <Button onClick={()=>setModal(!modal)}  style={{backgroundColor:"rgba(119, 131, 201, 0.86)", color:"rgba(255, 255, 255, 0.99)"}}>
                Read more
            </Button>
        </CardBody>
        </Card>
        <MyModal image={image} info={info} modal={modal} setModal={setModal}/>
    </div>
  )
}


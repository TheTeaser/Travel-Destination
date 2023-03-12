import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {useNavigate} from 'react-router-dom'
import './Tour.css'
const dataDB=require('../../../data/db.json')

function Tour(){
    let navigation=useNavigate();
    return(
        <div>
            {dataDB.map((item)=>{
                return (<Card>
                    <Card.Img src={item.image}/>
                    <Card.Body>
                    <Button className='btn' variant="primary" onClick={()=>navigation(`/city/${item.id}`)}>{item.name}</Button>
                    </Card.Body>
                </Card>)
            })}
        </div>
    )
}

export default Tour
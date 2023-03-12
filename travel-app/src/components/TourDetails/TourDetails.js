import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/Card';
import data from '../../data/db.json'
import { useState } from 'react';
import './TourDetails.css'

function TourDetails() {
    const { id } = useParams();
    let details = data.filter((item) =>
        item.id === id);
    let value = details[0];
    let [showMore, setShowmore] = useState(false);
    let showMoreHandler = () => {
        setShowmore(!showMore);
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={value.image} />
                <Card.Body>
                    <Card.text>
                        {showMore ? value.info : `${value.info.substring(0, 100)}...`}
                    </Card.text>
                    <Button onClick={showMoreHandler}>
                        {showMore ? "Show Less" : "Show More"}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TourDetails
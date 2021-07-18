import React from 'react';
import { Card, Button } from 'react-bootstrap'

const Vehicle = props => {
    console.log(props);
    const { name, image } = props.traffic

    return (
        <Card className="col-sm-2" style={{ margin: '30px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Button variant="primary">Book</Button>
            </Card.Body>
        </Card>
    );
};

export default Vehicle;
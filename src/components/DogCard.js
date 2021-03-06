import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap'
import Favourites from './Favourites';

const DogCard = ({ doggos, favourites, addFavourites, removeFavourites }) => {

  return (
    <Container className='justifyContent-md-center'>
      <Row>
      {doggos.map((doggo) => (
        <Col md={4} sm={6} xs={12} key = { doggo.id }>
          <Card className="m-2 dogCard">
          <Card.Img className = "resizeImage" variant="top" src={doggo.image.url} />
            <Card.Body>
              <Card.Title style = {{
                display: 'flex',
                'justifyContent': 'space-between'
              }}>
                {doggo.name}
              <Favourites favouriteDoggo = { doggo }
               favourites= { favourites }
               addFavourites = { addFavourites }
               removeFavourites = { removeFavourites }
               />
              </Card.Title>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>See More</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Origin: {doggo.origin}</li>
                      <li>Height and Weight: {doggo.height.metric} | {doggo.weight.metric} </li>
                      <li>Lifespan: {doggo.life_span}</li>
                      <li>Breed Group: {doggo.breed_group || 'Unknown'}</li>
                      <li>Bred For: {doggo.bred_for}</li>
                      <li>Temperament: {doggo.temperament}</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default DogCard;
import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';

const Filter = ({ breedGroups, filterBreeds }) => {

  return (
    <Container className="filterContainer">
      <h5> Filter dogs by breed</h5>
      <Col className="d-flex justifyContent-center">
        {breedGroups.map((eachBreed, id) => {
          return eachBreed !== '' &&
          <Button variant="primary" className="equalButtons" key={ id } onClick={() => filterBreeds(eachBreed)}>{eachBreed || 'Unknown'}</Button>
        })}
        <Button variant="primary" className="equalButtons" onClick={() => filterBreeds('All')}>All</Button>
      </Col>
    </Container>
  )
}

export default Filter;
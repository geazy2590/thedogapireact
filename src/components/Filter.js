import React from 'react';
import {Col, Container, Dropdown } from 'react-bootstrap';

const Filter = ({ breedGroups, filterBreeds }) => {

  return (
    <Container>
      <Col className="d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
          {breedGroups.map((eachBreed, id) => (
            <Dropdown.Item id={ id } onClick={() => filterBreeds(eachBreed)}>{eachBreed}</Dropdown.Item>
          ))}
            <Dropdown.Item onClick={() => filterBreeds('All')}>Show All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Container>
  )
}

export default Filter;
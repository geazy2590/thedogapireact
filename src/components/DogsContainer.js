import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DogCard from './DogCard';
import Filter from './Filter';

  const DogsContainer = () => {


    const [doggos, setDoggos] = useState([]);
    const [eachDog, setEachDog] = useState([]);

    const DOGGO_API = `https://api.thedogapi.com/v1/breeds`;

    useEffect(() => {
      (async function () {
        await fetch(DOGGO_API).then((res) => res.json()).then((dogs) => {
            setDoggos(dogs);
            setEachDog(dogs);
          }
        );
      })();

    }, [DOGGO_API]);

    const breedGroups = [ ...new Set(doggos.map((val) => val.breed_group))];

    const filterBreeds = (selectedBreed) => {
      if (selectedBreed === "All") {
        setEachDog(doggos);
        return
      }

      const filteredData = doggos.filter(
        (doggo) => doggo.breed_group === selectedBreed
      );
      setEachDog(filteredData);
    };

    const [ favourites, setfavourites ] = useState(JSON.parse(localStorage.getItem("favourites")) || []);

    const addFavourites = ({ favouriteDoggo }) => {
      setfavourites([ ...favourites, favouriteDoggo.id])
    }

    const removeFavourites = ({ favouriteDoggo }) => {
      setfavourites([ ...favourites.filter((found) => found !== favouriteDoggo.id)])
    }

    useEffect(() => {
      localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    return (
      <Fragment>
        <Container className='styledContainer'>
          <h2 className='styledHeaders'> The Dog API </h2>
          <h4 className='styledHeaders'> Dogs {'>'} Cats </h4>
        </Container>
        <Filter
          filterBreeds = { filterBreeds }
          breedGroups = { breedGroups }
        />
        <DogCard
          doggos = { eachDog }
          favourites = { favourites }
          addFavourites = { addFavourites }
          removeFavourites = { removeFavourites }
        />
      </Fragment>
    )
  }

  export default DogsContainer;
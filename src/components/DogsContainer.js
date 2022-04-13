  import React, { Fragment, useEffect, useState } from 'react';
import DogCard from './DogCard';
import Filter from './Filter';

  const DogsContainer = () => {

    const [doggos, setDoggos] = useState([]);
    const [abc, setAbc] = useState([]);

    const DOGGO_API = `https://api.thedogapi.com/v1/breeds`;

    useEffect(() => {
      (async function () {
        await fetch(DOGGO_API).then((res) => res.json()).then(setDoggos);
      })();

    }, [DOGGO_API]);

    const breedGroups = [ ...new Set(doggos.map((val) => val.breed_group))];

    const filterBreeds = (selectedBreed) => {
      if (selectedBreed === "All") {
        setAbc(doggos);
        return;
      }

      const filteredData = doggos.filter(
        (doggo) => doggo.breed_group === selectedBreed
      );
      setAbc(filteredData);
    };

    return (
      <Fragment>
        <h2 className='text-center'> The Dog API </h2>
        <Filter
          filterBreeds = { filterBreeds }
          breedGroups = { breedGroups }
        />
        <DogCard doggos = { abc } />
      </Fragment>
    )
  }

  export default DogsContainer;
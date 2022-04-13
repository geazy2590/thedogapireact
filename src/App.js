import React, { Fragment, useEffect, useState } from 'react';
import DogCard from './components/DogCard';


const App = () => {
  const [doggos, setDoggos] = useState([]);

  const DOGGO_API = "https://api.thedogapi.com/v1/breeds";

  useEffect(() => {
    (async function () {
      await fetch(DOGGO_API).then((res) => res.json()).then(setDoggos);
    })();
  }, [DOGGO_API]);

  return (
    <Fragment>
      <h2 className='text-center'> The Dog API </h2>
      <DogCard doggos = { doggos } />
    </Fragment>
  );
}

export default App;


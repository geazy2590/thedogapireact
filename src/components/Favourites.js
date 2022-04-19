import React, { Fragment } from 'react';

const Favourites = ({ favouriteDoggo, favourites, addFavourites, removeFavourites }) => {

  return (
    <Fragment>
      {favourites.includes(favouriteDoggo.id) ? (
        <i className='bi bi-heart-fill' onClick={() => removeFavourites({ favouriteDoggo })}></i>
      ) : (
        <i className='bi bi-heart' onClick={() => addFavourites({ favouriteDoggo })}></i>
      )}
    </Fragment>
  )
}

export default Favourites;
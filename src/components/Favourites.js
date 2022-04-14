import React, { useState } from 'react';

const Favourites = ({ favouriteDoggo }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavourites = ({ favouriteDoggo }) => {
    let array = favorites;
    let addArray = false;

    array.map((item, key) => {
      if(item === favouriteDoggo.id) {
        array.splice(key, 1);
        addArray = false;
      }
    });

    if(addArray){
      array.push(favouriteDoggo)
    }

    setFavorites([ ...array])
  }

  return (
    <div>
      {favorites.includes(favouriteDoggo.id) ? (
        <i className="bi bi-heart-fill"
          onClick = {() => addFavourites({favouriteDoggo})}
          style = {{ color: 'red'}}
        />
      ) : (
        <i className="bi bi-heart"
          onClick = {() => addFavourites({favouriteDoggo})}
          style = {{ color: 'green'}}
        />
      )}
    </div>

  )
}

export default Favourites;
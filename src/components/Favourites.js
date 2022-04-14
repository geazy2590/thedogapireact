import React, { useEffect, useState } from 'react';

const Favourites = ({ favouriteDoggo }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavourites = JSON.parse(
      localStorage.getItem('favourites')
    );

    setFavorites(getFavourites);
  }, [])

  const saveToLocalStorage = (favouriteDoggos) => {
    localStorage.setItem('favourites', JSON.stringify(favouriteDoggos));
  }

  const addFavourites = ({ favouriteDoggo }) => {
    const newFavouriteList = [...favorites, favouriteDoggo]
    setFavorites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavourites = ({ favouriteDoggo }) => {
    const newFavouriteList = favorites.filter(
      (favourite) => favourite.id !== favouriteDoggo.id
    );

    setFavorites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const modifyFavourites = ({ favouriteDoggo }) => {
    favorites.forEach(item => {
      if(item.id !== favouriteDoggo.id){
        let newFavouriteList = [ ...favorites, favouriteDoggo];
        setFavorites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      }
    })

    const newFavouriteList = favorites.filter(
      (favourite) => favourite.id !== favouriteDoggo.id
    );

    setFavorites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <div>
      {favorites.includes(favouriteDoggo.id) ? (
        <i className="bi bi-heart-fill"
          onClick = {() => removeFavourites({favouriteDoggo})}
          style = {{ color: 'red'}}
        />
      ) : (
        <i className="bi bi-heart"
          onClick = {() => modifyFavourites({favouriteDoggo})}
          style = {{ color: 'green'}}
        />
      )}
    </div>

  )
}

export default Favourites;
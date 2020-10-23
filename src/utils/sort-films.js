

export const sortFilms = (filmArray, sortType) => {
  const sortedFilms = filmArray.filter((film)=>film.filmGenre === sortType);
  return sortedFilms;
};


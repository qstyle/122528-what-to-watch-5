
const generateRandomNumber = (randomMin, randomMax) => {
  let randomValue = Math.round((Math.random() * randomMax));
  if (randomValue < randomMin) {
    randomValue += randomMin;
  }
  return randomValue;
};
const FILM_COUNT = 8;

export default function filmMock() {
  const film = [];
  for (let i = 0; i < FILM_COUNT; i++) {
    film.push(mocks());
  }
  return film;
}
function mocks() {
  return {
    filmName: generateFilmName(),
    years: generateYear(),
    filmAvatar: generateAvatar(),
    filmGenre: generateGenre(),
    rating: generateRating(),
    director: generateDirector(),
    starring: generateStarring(),
    discription: generateDiscription(),
    id: generateRandomNumber(100000, 900000)

  };
}

function generateFilmName() {
  const films = [`filmName1`, `filmName2`, `filmName3`, `filmName4`, `filmName5`, `filmName6`, `filmName7`];
  const randomIndex = generateRandomNumber(0, 6);
  return films[randomIndex];
}

function generateAvatar() {
  const avatar = [`avatar`, `aviator`, `macbeth`, `orlando`, `revenant`, `snatch`, `shutter-island`];
  const randomIndex = generateRandomNumber(0, 6);
  return avatar[randomIndex];
}

function generateGenre() {
  const geners = [`drama`, `action`, `detectiv`, `gener1`, `gener2`, `gener3`, `gener4`];
  const randomIndex = generateRandomNumber(0, 6);
  return geners[randomIndex];
}

function generateRating() {
  return `${generateRandomNumber(0, 10)},${generateRandomNumber(1, 10)}`;
}

function generateDirector() {
  const directors = [`director1`, `director2`, `director3`, `director4`, `director5`, `director6`, `director7`];
  const randomIndex = generateRandomNumber(0, 6);
  return directors[randomIndex];
}

function generateYear() {
  return `${generateRandomNumber(1990, 2020)}`;
}

function generateStarring() {
  const starring = [`artist1`, `artist2`, `artist3`, `artist4`, `artist5`, `artist6`, `artist7`];
  const randomPulls = [generateRandomNumber(1, starring.length)];
  const starrings = [];
  for (let i = 0; i < randomPulls; i++) {
    const randomIndex = [generateRandomNumber(0, starring.length - 1)];
    starrings.push(starring[randomIndex]);
  }
  return starrings;
}
function generateDiscription() {
  return `BLAH blah BLAH blah BLAH blah BLAH blah BLAH blah
   BLAH blah BLAH blah BLAH blah BLAH blah
  BLAH blah BLAH blah BLAH blah BLAH blah BLAH blah
   BLAH blah BLAH blah BLAH blah BLAH blah BLAH blah BLAH blah
  BLAH blah BLAH blah BLAH blah BLAH blah BLAH blah
   BLAH blah BLAH blah BLAH blah BLAH blah BLAH blah `;
}

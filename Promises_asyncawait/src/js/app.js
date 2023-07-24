import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
    .then((saving) => {
        console.log(saving);
        // saving объект класса GameSaving
    })
    .catch((error) => {
        console.log(error);
    });

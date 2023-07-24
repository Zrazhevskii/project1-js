import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

const hitman = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
    },
});

test('testing working status of GameSavingLoader class', async () => {
    await expect(GameSavingLoader.load()).resolves.toEqual(hitman);
});

import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(10000);

const hitman = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
});

test('Проверка корректность работы', (done) => {
    GameSavingLoader.load().then((object) => {
        expect(object).toEqual(hitman);
        done();
    });
});

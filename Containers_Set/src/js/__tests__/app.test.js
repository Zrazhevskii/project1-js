import Team from '../app';

test('Добавление нового игрока', () => {
    const set = new Team();
    expect(() => {
        set.add('стрелок');
    }).not.toThrow();
});

test('Добавление уже существующего игрока игрока', () => {
    const set = new Team();

    expect(() => {
        set.add('стрелок');
        set.add('стрелок');
    }).toThrow('Такой персонаж уже есть');
});

test('Добавление уже существующего игрока игрока', () => {
    const set = new Team();

    expect(() => {
        set.addAll('стрелок', 'воин');
    }).not.toThrow();
});

test('Преобразование в массив', () => {
    const set = new Team();
    set.add('стрелок');
    set.add('воин');
    expect(set.toArray()).toEqual(['стрелок', 'воин']);
});

import Character from '../constructor';

test('check constructor', () => {
  const person = new Character('Bowman", "Bowman');
  expect(person).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  });
});
test('name error', () => {
  expect(() => new Character('Spydermanius', 'Bowman')).toThrow(
    'Недопустимая длина имена, количество букв должно быть от 2 до 10',
  );
});

test('type error', () => {
  expect(() => new Character('Swordsman', 'Zom')).toThrow(
    'Недопустимый тип игрока. Допустимый тип: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
  );
});

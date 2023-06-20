import Character from '../class/constructor';

test('check constructor', () => {
  const person = new Character('Person', 'Swordsman');
  expect(person).toEqual({
    name: 'Person',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
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

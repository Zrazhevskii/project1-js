import Magician from '../class/Magician';

test('corrective object creation', () => {
  const magician = new Magician('Magician');
  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  });
});

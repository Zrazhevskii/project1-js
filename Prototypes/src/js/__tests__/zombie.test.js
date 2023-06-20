import Zombie from '../class/Zombie';

test('corrective object creation', () => {
  const zombie = new Zombie('Zombie');
  expect(zombie).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  });
});

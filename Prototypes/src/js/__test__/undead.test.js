import Undead from '../class/Undead';

test('corrective object creation', () => {
  const undead = new Undead('Undead')
  expect(undead).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  })
})

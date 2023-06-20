import Bowman from '../class/Bowman';

test('corrective object creation', () => {
  const bowman = new Bowman('Bowman')
  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  })
})

import Swordsman from '../class/Swordsman'

test('corrective object creation', () => {
  const swordsman = new Swordsman('Swordsman')
  expect(swordsman).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  })
})

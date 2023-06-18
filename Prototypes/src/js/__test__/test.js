import Character from '../constructor'

test('check constructor', () => {
  const person = new Character('Bowman', 'Bowman')
  expect(person).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1, 
    attack: 25, 
    defense: 25,
  })
}) 

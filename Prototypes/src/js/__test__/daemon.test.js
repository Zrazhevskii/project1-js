import Daemon from '../class/Daemon';

test('corrective object creation', () => {
  const daemon = new Daemon('Daemon')
  expect(daemon).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  })
})

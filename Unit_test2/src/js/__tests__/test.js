import sortPlayers from '../players';

test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

test('check health', () => {
    const result = sortPlayers([{name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
      ])
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ])
})
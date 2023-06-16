import sortPlayers from '../players';

test('Sorted by health', () => {
    expect(
        sortPlayers([
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ])
    ).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
});

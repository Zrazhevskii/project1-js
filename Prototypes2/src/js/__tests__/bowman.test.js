import Bowman from '../class/Bowman';

test('corrective object creation', () => {
    const bowman = new Bowman('Bowman');
    expect(bowman).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defense: 25,
    });
});

test('correct operation of the function levelUp', () => {
    const bowman = new Bowman('Bowman');
    bowman.levelUp();

    expect(bowman).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defense: 30,
    });
});

test('correct operation of the function damage', () => {
    const bowman = new Bowman('Bowman');
    bowman.damage(40);
    expect(bowman.health).toBe(70);
});

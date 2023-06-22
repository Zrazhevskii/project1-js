import Undead from '../class/Undead';

test('corrective object creation', () => {
    const undead = new Undead('Undead');
    expect(undead).toEqual({
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defense: 25,
    });
});

test('correct operation of the function levelUp', () => {
    const undead = new Undead('Undead');
    undead.levelUp();

    expect(undead).toEqual({
        name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 30,
        defense: 30,
    });
});

test('correct operation of the function damage', () => {
    const undead = new Undead('Undead');
    undead.damage(20);
    expect(undead.health).toBe(85);
});

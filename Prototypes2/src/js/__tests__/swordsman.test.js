import Swordsman from '../class/Swordsman';

test('corrective object creation', () => {
    const swordsman = new Swordsman('Swordsman');
    expect(swordsman).toEqual({
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defense: 10,
    });
});

test('correct operation of the function levelUp', () => {
    const swordsman = new Swordsman('Swordsman');
    swordsman.levelUp();

    expect(swordsman).toEqual({
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 48,
        defense: 12,
    });
});

test('correct operation of the function damage', () => {
    const swordsman = new Swordsman('Swordsman');
    swordsman.damage(10);
    expect(swordsman.health).toBe(91);
});

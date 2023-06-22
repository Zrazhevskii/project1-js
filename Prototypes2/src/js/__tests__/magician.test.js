import Magician from '../class/Magician';

test('corrective object creation', () => {
    const magician = new Magician('Magician');
    expect(magician).toEqual({
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defense: 40,
    });
});

test('correct operation of the function levelUp', () => {
    const magician = new Magician('Magician');
    magician.levelUp();

    expect(magician).toEqual({
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defense: 48,
    });
});

test('correct operation of the function damage', () => {
    const magician = new Magician('Magician');
    magician.damage(50);
    expect(magician.health).toBe(70);
});

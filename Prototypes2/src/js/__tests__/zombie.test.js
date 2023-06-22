import Zombie from '../class/Zombie';

test('corrective object creation', () => {
    const zombie = new Zombie('Zombie');
    expect(zombie).toEqual({
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defense: 10,
    });
});

test('correct operation of the function levelUp', () => {
    const zombie = new Zombie('Zombie');
    zombie.levelUp();

    expect(zombie).toEqual({
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defense: 12,
    });
});

test('correct operation of the function damage', () => {
    const zombie = new Zombie('Zombie');
    zombie.damage(30);
    expect(zombie.health).toBe(73);
});

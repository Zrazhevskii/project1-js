import Daemon from '../class/Daemon';

test('corrective object creation', () => {
    const daemon = new Daemon('Daemon');
    expect(daemon).toEqual({
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defense: 40,
    });
});

test('correct operation of the function levelUp', () => {
    const daemon = new Daemon('Daemon');
    daemon.levelUp();

    expect(daemon).toEqual({
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 12,
        defense: 48,
    });
});

test('correct operation of the function damage', () => {
    const daemon = new Daemon('Daemon');
    daemon.damage(30);
    expect(daemon.health).toBe(82);
});

import Character from '../app';

test('damage check', () => {
    const spyderman = new Character('Spiderman', 'Swordsman');
    spyderman.damage(40);
    expect(spyderman.health).toBe(76);
});

test('if health < 0', () => {
    const spyderman = new Character('Spiderman', 'Swordsman');
    spyderman.health = -10;
    expect(() => spyderman.damage(40)).toThrow(
        'К сожалению, вы наносите урон уже мертвому персонажу, у него нет здоровья',
    );
});

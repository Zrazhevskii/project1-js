import Character from '../class/constructor';

test('check constructor', () => {
    const person = new Character('Person', 'Swordsman');
    expect(person).toEqual({
        name: 'Person',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 0,
        defense: 0,
    });
});

test('name error', () => {
    expect(() => new Character('Spydermanius', 'Bowman')).toThrow(
        'Недопустимая длина имена, количество букв должно быть от 2 до 10'
    );
});

test('type error', () => {
    expect(() => new Character('Swordsman', 'Zom')).toThrow(
        'Неизвестный тип игрока. Допустипые типы: Bowman,Swordsman,Magician,Daemon,Undead,Zombie'
    );
});

test('correct operation of the function levelUp', () => {
    const person = new Character('Person', 'Swordsman');
    person.levelUp();

    expect(person).toEqual({
        name: 'Person',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 0,
        defense: 0,
    });
});

test('operation of the levelUp function at zero health value', () => {
    const person = new Character('Person', 'Swordsman');
    person.health = 0;

    expect(() => person.levelUp()).toThrow('Нельзя повысить level умершего',);
});

test('correct operation of the function damage', () => {
    const person = new Character('Person', 'Swordsman');
    person.damage(40);
    expect(person.health).toBe(60);
});

test('operation of the damage function at zero health value', () => {
    const person = new Character('Person', 'Swordsman');
    person.health = -10;

    expect(() => person.damage(40)).toThrow(
        'Вы наносите урон уже мертвому персонажу, у него нет здоровья',
    );
});

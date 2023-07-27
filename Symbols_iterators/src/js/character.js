export default class Character {
    constructor(name, type) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];

        if (name.length < 2 || name.length > 10) {
            throw new Error(
                'Недопустимая длина имена, количество букв должно быть от 2 до 10',
            );
        } else {
            this.name = name;
        }

        if (!types.includes(type)) {
            throw new Error(
                `Неизвестный тип игрока. Допустипые типы: ${types}`,
            );
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defense = undefined;
    }
}

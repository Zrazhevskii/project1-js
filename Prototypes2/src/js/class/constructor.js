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
        this.attack = 0;
        this.defense = 0;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить level умершего');
        } else {
            this.level += 1;
            this.health = 100;
            this.attack = Number(`${this.attack}`) * 1.2;
            this.defense = Number(`${this.defense}`) * 1.2;
        }
        // return `${this.level}, ${this.health}, ${this.attack}, ${this.defense}`
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - `${this.defense}` / 100);
        } else {
            throw new Error(
                'Вы наносите урон уже мертвому персонажу, у него нет здоровья',
            );
        }
    }
}

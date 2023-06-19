export default function Character(name, type) {
  const types = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  const power = {
    Bowman: { attack: 25, defense: 25 },
    Swordsman: { attack: 40, defense: 10 },
    Magician: { attack: 10, defense: 40 },
    Undead: { attack: 25, defense: 25 },
    Zombie: { attack: 40, defense: 10 },
    Daemon: { attack: 10, defense: 40 },
  };

  if (name.length < 2 || name.length > 10) {
    throw new Error(
      'Недопустимая длина имена, количество букв должно быть от 2 до 10',
      );
  }

  if (!types.includes(type)) {
    throw new Error(
      'Недопустимый тип игрока. Допустимый тип: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
      );
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = power[this.type].attack;
  this.defense = power[this.type].defense;
}

const person = new Character('Swordsman', 'Daemon');
console.log(person);

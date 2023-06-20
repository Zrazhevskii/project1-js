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
        'Недопустимый тип игрока. Допустимый тип: Bowman, Swordsman, Magician, Daemon, Undead, Zombie',
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

  // const power = {
  //   Bowman: { attack: 25, defense: 25 },
  //   Swordsman: { attack: 40, defense: 10 },
  //   Magician: { attack: 10, defense: 40 },
  //   Undead: { attack: 25, defense: 25 },
  //   Zombie: { attack: 40, defense: 10 },
  //   Daemon: { attack: 10, defense: 40 },
  // };

  



// const person = new Character('Swordsman', 'Daemon');
// console.log(person);
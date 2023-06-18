export default function Character(name, type) {
  const types = [
    'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'
  ]
  
  if (name.length < 2 || name.length > 10) {
    throw new Error('Не допустимая длина имена, количество символов о т 2 до 10')
  }

  if (types.includes(type)) {
    console.log(true);
} else {
  throw new Error('Ошибка. Допускаются только персонажи типа: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
}
  
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

}

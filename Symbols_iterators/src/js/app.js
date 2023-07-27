import Bowman from './bowman';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie';
import Team from './team';

const bowman = new Bowman('Лучник');
const daemon = new Daemon('Демон');
const magician = new Magician('Маг');
const swordsman = new Swordsman('Самурай');
const undead = new Undead('Нежить');
const zombie = new Zombie('Зомби');

const person = new Team();

person.addAll([bowman, daemon, magician, swordsman, undead, zombie]);

const iter = person[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (const evt of person) {
    console.log(evt);
}

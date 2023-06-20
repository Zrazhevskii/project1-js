import Character from "./constructor";

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defense = 25;
  }
}

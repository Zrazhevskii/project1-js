export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(name) {
      if (this.members.has(name)) {
        throw new Error('Такой персонаж уже есть');
      }
      this.members.add(name);
    }
  
    addAll(...rest) {
      rest.forEach((member) => this.members.add(member));
      return this.members
    }
  
    toArray() {
      return Array.from(this.members);
    }
  }

// const arr = new Team();
// console.log(arr.addAll('piton', 'hueton'));
// console.log(arr.addAll('zaraza', 'hueton'));
// console.log(arr.add('huetons'));
// console.log(arr.toArray());
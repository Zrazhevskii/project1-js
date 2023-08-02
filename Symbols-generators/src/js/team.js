export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        this.members.add(member);
    }

    addAll(persons) {
        this.members = new Set([...this.members, ...persons]);
    }

    * [Symbol.iterator]() {
        for (const person of this.members) {
            yield person;
          }
    }
}

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        this.members.add(member)
    }

    addAll(persons) {
        this.members = new Set([...this.members, ...persons]);
    }

    [Symbol.iterator]() {
        const arrTeam = Array.from(this.members);
        let count = 0;
        return {
            next() {
                if (count < arrTeam.length) {
                    return { value: arrTeam[count++], done: false,}
                };
                return {value: undefined, done: true,}
            }
        }
    }
}

export default class ErrorRepository {
    constructor() {
        this.codeError = new Map();
        this.codeError.set(1, 'Проверте подключение к интернету');
        this.codeError.set(2, 'Нет связи с сервером');
    }

    add(num, str) {
        this.codeError.set(num, str);
    }

    translate(number) {
        return this.codeError.get(number) || 'Unknown error';
    }
}

// const err = new ErrorRepository();

// console.log(err.add(3, 'Нет энергии'));
// console.log(err.translate(4));
// console.log(err);
// console.log(err.add(3, 'Нет жизни'));
// console.log(err);

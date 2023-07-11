export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUsername(name) {
        if (
            !/^([^?!\d-_])([\w-_]+)([^?!\d-_])$/i.test(name) ||
            /\d{4,}/.test(name)
        ) {
            return 'Не корректное имя, просьба посмотреть требования к имени'
        }
        return 'Поздравляем вы зарегестрированы!';
    }
}

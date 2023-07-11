export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUsername() {
        if (
            !/^([^?!\d-_])([\w-_]+)([^?!\d-_])$/i.test(this.name)
           || /\d{4,}/.test(this.name)
        ) {
            return 'Не корректное имя, просьба посмотреть требования к имени';
        }
        return 'Поздравляем вы зарегестрированы!';
    }
}

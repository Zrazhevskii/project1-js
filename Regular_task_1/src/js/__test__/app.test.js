import Validator from '../app';

test.each([
    ['Vasilii', 'Поздравляем вы зарегестрированы!'],
    ['Vasil_2ii', 'Поздравляем вы зарегестрированы!'],
    ['22Vasilii', 'Не корректное имя, просьба посмотреть требования к имени'],
    ['Vasilii-', 'Не корректное имя, просьба посмотреть требования к имени'],
    ['Va2222silii', 'Не корректное имя, просьба посмотреть требования к имени'],
    
])('Проверка валидности имени', (name, result) => {
    const user = new Validator(name);
    expect(user.validateUsername(name)).toBe(result);
});

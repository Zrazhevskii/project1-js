import ErrorRepository from '../app';

const err = new ErrorRepository();

test('Добавление кода ошибки без ошибки', () => {
    expect(() => {
        err.add(3, 'Нет энергии').not.toThrow();
    });
});

test('should return human-readable text of error (1)', () => {
    expect(err.translate(1)).toBe('Проверте подключение к интернету');
});

test('should return human-readable text of error (2)', () => {
    expect(err.translate(2)).toBe('Нет связи с сервером');
});

test('Перезапись ошибки', () => {
    err.add(3, 'Нет жизни');
    expect(err.codeError.size).toBe(3);
});

test('Получение существующего кода ошибки', () => {
    expect(() => {
        err.translate(1).toThrow('Проверте подключение к интернету');
    });
});

test('Получение не существующего кода ошибки', () => {
    expect(() => {
        err.translate(3).toBe('Unknown error');
    });
});

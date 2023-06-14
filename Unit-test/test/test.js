import { calcTotal } from '../src/app.js'

test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

test('calcTotal', () => {
    const lists = [
        {
            id: 2,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 3,
            name: 'JavaScript',
            count: 1,
            price: 1300
        }
    ];

    const result = calcTotal(lists);
    expect(result).toBe(2500);
})
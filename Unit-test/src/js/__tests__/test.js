import streakOfLife from '../health.js';

test('check health: 40', () => {
  const list = streakOfLife({
    name: 'Лучник',
    health: 40,
  });
  expect(list).toBe('wounded');
});

test('check health: 70', () => {
  const list = streakOfLife({
    name: 'Маг',
    health: 70,
  });
  expect(list).toBe('healthy');
});

test('check health: 12', () => {
  const list = streakOfLife({
    name: 'Пехотинец',
    health: 12,
  });
  expect(list).toBe('critical');
});

test('check health: -10', () => {
  const list = streakOfLife({
    name: 'Зомби',
    health: -10,
  });
  expect(list).toBe('Error');
});

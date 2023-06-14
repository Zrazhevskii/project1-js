import streakOfLife from '../health.js'

test('check health: 40', () => {
    const list = streakOfLife({
        name: 'Маг',
        health: 40
    })
    expect(list).toBe('wounded')
})
export default function streakOfLife(evt) {
    if (evt.health > 50) {
        return 'healthy'
    } else if (evt.health <= 50 && evt.health > 15) {
        return 'wounded'
    } else if (evt.health <= 50 && evt.health > 15) {
        return 'critical'
    } else {
        throw new Error('Parameter is not a number!')
    }
}
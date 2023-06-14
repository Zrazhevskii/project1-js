export default function streakOfLife(item) {
    if (item.health > 50) {
        return 'healthy'
    } else if (item.health <= 50 && item.health > 15) {
        return 'wounded'
    } else if (item.health <= 15 && item.health > 0) {
        return 'critical'
    } else {
        alert('Что-то пошло не так')
    }
}
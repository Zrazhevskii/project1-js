export default function streakOfLife(item) {
  if (item.health > 50) {
    return 'healthy';
  }
  if (item.health <= 50 && item.health > 15) {
    return 'wounded';
  }
  if (item.health <= 15 && item.health >= 0) {
    return 'critical';
  }
  return 'Error';
}

export function calcTotal(lists) {
    return lists.reduce((total, item) => {
        return total + (item.count * item.price);
    }, 0)
}

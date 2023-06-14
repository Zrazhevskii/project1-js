export function calcTotal(lists) {
    let result = 0;
    for (let i = 0; i < lists.length; i++) {
        result += lists[i].count * lists[i].price
    }
    return result
}

export default function orderByProps(obj, dataToSort) {
    const arrOrder = [];
    const data = [];

    for (const key in obj) {
        if (dataToSort.includes(key)) {
            const index = dataToSort.indexOf(key);
            arrOrder.splice(index, 0, { key, value: obj[key] });
        } else {
            data.push({ key, value: obj[key] });
        }
    }
    data.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...arrOrder, ...data];
}

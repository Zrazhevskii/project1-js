export default function sortPlayers(sorted) {
    const sortList = sorted.sort(
        (a, b) => parseFloat(b.health) - parseFloat(a.health)
    );
    console.log(sortList);
    return sortList;
}

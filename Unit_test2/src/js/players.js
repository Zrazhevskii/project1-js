export default function sortPlayers(sortPlayers) {
    const sortList = sortPlayers.sort((a, b) => parseFloat(b.health) - parseFloat(a.health));
    console.log(sortList);
}
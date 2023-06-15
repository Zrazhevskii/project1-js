export default function players(sortPlayers) {
    console.log(sortPlayers.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
}
function superbowlWin(games) {
    // Use the find() method to search for a game where the result is "W"
    const winningGame = games.find(function(game) {
        return game.result === "W";
    });

    // If a winning game is found, return the year of that game
    // Otherwise, return undefined
    return winningGame ? winningGame.year : undefined;
}

const games = [
    { year: 1999, result: "L" },
    { year: 2000, result: "W" },
    { year: 2001, result: "L" },
    { year: 2002, result: "W" }
];

console.log(superbowlWin(games)); // Output: 2000




// code your solution here

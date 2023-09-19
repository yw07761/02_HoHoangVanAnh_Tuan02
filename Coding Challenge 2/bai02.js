// Game data
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrusia Dortmund',
    players: [
        'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
        'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby',
        'Lewandowski'
    ],
    score: '4:0',
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
    date: 'Nov 9th, 2030',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Task 1: Loop over the game.scored array and print each player name with the goal number
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// Task 2: Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
const averageOdd = odds.reduce((total, odd) => total + odd, 0) / odds.length;
console.log(`Average Odd: ${averageOdd.toFixed(2)}`);

// Task 3: Print the 3 odds in a nice formatted way
for (const [team, odd] of Object.entries(game.odds)) {
    if (team === 'x') {
        console.log(`Odd of draw: ${odd}`);
    } else {
        console.log(`Odd of victory ${game[team]}: ${odd}`);
    }
}

// Task 4 (Bonus): Create an object 'scorers' with player names and goal counts
const scorers = {};
game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
});

console.log('Bonus - Scorers:', scorers);
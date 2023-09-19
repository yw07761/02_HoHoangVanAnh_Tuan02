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

// Task 1: Create player arrays
const players1 = [...game.players];
const players2 = ['Courtois', 'Varane', 'Ramos', 'Carvajal', 'Hazard', 'Benzema', ...game.players];

// Task 2: Create goalkeeper and field players arrays for team 1
const [gk, ...fieldPlayers] = players1;

// Task 3: Create an array containing all players
const allPlayers = [...players1, ...players2];

// Task 4: Create an array for team 1 with substitute players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task 5: Create variables for odds
const { team1, x: draw, team2 } = game.odds;

// Task 6: Write a function to print player names and total goals
function printGoals(...players) {
    console.log(`${players.length} goals were scored:`);
    players.forEach((player) => {
        console.log(player);
    });
}

// Task 7: Determine which team is more likely to win
const moreLikelyToWin = team1 < team2 ? game.team1 : game.team2;

// Displaying the results in the console
console.log('Task 1 - Players1:', players1);
console.log('Task 1 - Players2:', players2);
console.log('Task 2 - Goalkeeper for Team 1:', gk);
console.log('Task 2 - Field Players for Team 1:', fieldPlayers);
console.log('Task 3 - All Players:', allPlayers);
console.log('Task 4 - Team 1 with Substitute Players:', players1Final);
console.log('Task 5 - Odds:', `Team 1: ${team1}, Draw: ${draw}, Team 2: ${team2}`);
console.log('Task 6 - Test data for Task 6:');
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log('Task 6 - Call the function again with players from game.scored:');
printGoals(...game.scored);
console.log('Task 7 - The team more likely to win is:', moreLikelyToWin);
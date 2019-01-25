fs = require('fs');

fs.readFile(`wcup.json`, `utf8`, function (err, data) {
    if (err) {
        return console.log(err);
    }
    var parsedData = JSON.parse(data);

    for(x in parsedData){
        console.log(`Fifa code: ${parsedData[x].fifa_code}, Wins: ${parsedData[x].wins}, Draws: ${parsedData[x].draws}, Losses: ${parsedData[x].losses}`);
    }
    console.log('\nTeams with no wins:');
    for(x in parsedData){
        if(parsedData[x].wins == 0){
            console.log(parsedData[x].fifa_code);
        }
    }
    console.log('\nTeams that lost every game: ')
    for(x in parsedData){
        if(parsedData[x].games_played == parsedData[x].losses){
            console.log(parsedData[x].fifa_code);
        }
    }
});
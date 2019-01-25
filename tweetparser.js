fs = require('fs');

fs.readFile(`tweet.json`, `utf8`, function (err, data) {
    if (err) {
        return console.log(err);
    }
    var parsedData = JSON.parse(data);

    console.log(`Date: ${parsedData.created_at}`);
    console.log(`Name: ${parsedData.user.name}`);
    console.log(`Text: ${parsedData.text}`);
    console.log(`Screen Name: ${parsedData.user.screen_name}`);
    for(x in parsedData.entities.hashtags){
        console.log(`Hashtag ${x}: ${parsedData.entities.hashtags[x].text}`);
    }
});
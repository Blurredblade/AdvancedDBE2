fs = require('fs');

fs.readFile(`data.json`, `utf8`, function (err, data) {
    if (err) {
        return console.log(err);
    }
    var dt = JSON.parse(data);

    //console.log(Object.keys(dt.menu).length);
    //console.log(dt.menu.header);

    for(x in dt.menu.items){
        if(dt.menu.items[x] != null){
            var out = dt.menu.items[x].id;
            console.log(out);
        }
    }
});
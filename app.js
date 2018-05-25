const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('home');
});

app.get("/fallinlovewith/:thing", function(req, res){
    const thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts/', function(req, res){
    const posts = [
        {title: "A long, short game", author: "Ben Stroke"},
        {title: "Everything is easier.", author: "Charls Jone"},
        {title: "It's time todo somthing.", author: "Garry Mert"},
        {title: "Do Something in life.", author: "Jhony walker"}
    ];

    res.render('posts', {posts: posts});

});

app.listen(3002, 'localhost', function(){
    console.log('Server is running at http://localhost:3002/');
});
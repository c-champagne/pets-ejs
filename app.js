const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));


let jsonData = require('./public/animals.json');

console.log(jsonData[0].name);


app.get('/', function (req, res, next) {
    
    res.render('home', {
        data: jsonData,
    })
});

app.get('/simon', function (req, res, next) {
    res.render('pets', {
        name: jsonData[0].name,
        description: jsonData[0].description,
        imgURL: jsonData[0].imgURL,
    })
});

app.get('/vito', function (req, res, next) {
    res.render('pets', {
        name: jsonData[1].name,
        description: jsonData[1].description,
        imgURL: jsonData[1].imgURL,
    })
});

app.get('/temmie', function (req, res, next) {
    res.render('pets', {
        name: jsonData[2].name,
        description: jsonData[2].description,
        imgURL: jsonData[2].imgURL,
    })
});

app.get('/randomdog', function (req, res, next){
    res.render('pets', {
        name: jsonData[3].name,
        description: jsonData[3].description,
        imgURL: jsonData[3].imgURL,
    })
})

app.get('/randomcat', function (req, res, next){
    res.render('pets', {
        name: jsonData[4].name,
        description: jsonData[4].description,
        imgURL: jsonData[4].imgURL,
    })
})

app.get('/year', function(req, res, next){
    let age = req.query.age;
    let birthYear = 2020 - age;
    //query parameter is /year?age=27
    /* res.send(`You were born in ${birthYear}`); */
    res.render('year', {
        pageTitle:'Forget what year you were born?',
        userAge: 'If you are ' + age + ' years old...',
        greeting: 'You were born in ' + birthYear

    })
})



app.listen(3000, function(){
    console.log('Ready to go!')
})
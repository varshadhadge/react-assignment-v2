const express = require('express');
const request = require('request');
const app = express();
const hbs = require('hbs');
const path = require('path');


const staticRes = path.join(__dirname, './views/css');
app.use('',express.static(staticRes));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');
app.get('/users', (req,res) => {
    // console.log(res.data);
    // res.render('index',{
    //     // data:res.body.results
    // });
    request(options, function (err, data) {
        if (err) {
            return false;
        }
        var apiData = data.body.data;
        // res.send(data.body);
        // console.log(res.body);
        console.log(apiData);
        res.render('index',{
            data:apiData
        });
    })
    
});

// api call and authentication
const options = {
    url: 'https://reqres.in/api/users',
    json: true,
    auth: {
        user: 'eve.holt@reqres.in"',
        password: 'cityslicka'
    }
}

// getting response in body
app.get('/', (req,res) => {
    request(options, function (err, data) {
        if (err) {
        return false;
        }
        res.send(data.body);
    })
});

const PORT = process.env.PORT || 3500
// port setting
app.listen(PORT, ()=>{
    console.log('Running');
});
const express = require('express');

const usersRouter = require('./routes/users.route');
const home = require("./controllers/home.controller");
const path = require("path");
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use((req, res, next) => {
    console.log(`${req.method} and request url is: ${req.url}`);
    next();
});

app.use(express.json());
app.use('/site', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title : "My name is HBS",
        headingOne: "This is HBS Heading"
    })
});
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log("Running on port: " + 3000);
});
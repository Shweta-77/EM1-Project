var app = express();
var path = require('path');


// viewed at http://localhost:8080
app.use("/public",express.static("Public"));

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});
app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/about.html'));
});

app.get('/login.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/login.html'));
});
app.get('/Signup.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/Signup.html'));
});

app.listen(8080);

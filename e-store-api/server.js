var cors = require('cors');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/user');
  Member = require('./api/models/member');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://estoreadmin:PjRExhLUK0iIwBA8@cluster0.blvvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); 

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require('./api/routes/user-routes');
routes(app); //register the route


app.use(function(req, res){ res.status(404).send({ url: req.originalUrl + ' not found' }) });

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

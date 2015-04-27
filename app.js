var express      = require('express'),
    errorhandler = require('errorhandler'),
    morgan       = require('morgan'),
    bodyParser   = require('body-parser'),
    nunjucks     = require("nunjucks"),
    markdown     = require("nunjucks-markdown")
    marked       = require("marked"),
    auth         = require('http-auth'),
    routes       = require("./routes");

var app = express();
var port = process.env.PORT || 3000;

var basic = auth.basic({
    realm: "Sorry, this site is private :-/"
  }, function (username, password, callback) { // Custom authentication method.
    callback(username === "socialbro" && password === "isawesome");
  }
);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}
else {
  app.use(auth.connect(basic));
}

var nunjucksEnv = nunjucks.configure("views", {
  autoescape: false,
  express: app
});

/*
 * Adds the function `component(partial)` to use globally in all templates
 * Is an alias for:
 * {% set component = partial %}
 * {% include "partial/example.html" %}
*/
nunjucksEnv.addGlobal('component', function(component){
  return nunjucks.render('partial/example.html', {
    component: component
  });
});

markdown.register(nunjucksEnv, marked);

app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(routes);

if (!process.env.CALLER) {
  app.listen(port);
  console.log("We took the stage on port " + port);
}

module.exports = app;

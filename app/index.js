require('./main.css');
require('./main.scss');
var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello world</h1>';
app.appendChild(sub());
document.body.appendChild(app);
const $ = require('jquery');

$('body').css({ 'background-color': '#eeeeee' });
$('h1#title')
  .css({ 'font-size': '80px', 'text-align': 'center', 'margin-top': '100px' })
  .text('Hello from webpack-dev-server');

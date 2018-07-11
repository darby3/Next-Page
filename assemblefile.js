'use strict';

var assemble = require('assemble');
var extname = require("gulp-extname");
var app = assemble();

app.layouts('templates/layouts/**/*.hbs');
app.partials('templates/partials/**/*.hbs');

app.option('layout', 'main');

app.task('default', function() {
  app.pages('pages/*.hbs');
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest('build'));
});

module.exports = app;

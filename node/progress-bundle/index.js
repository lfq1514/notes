var ProgressBar = require('progress');

var bar = new ProgressBar('progress: [:bar]', { total: 50, width: 10, complete: '*' });


var timer = setInterval(function () {
  bar.tick(5);  //进度步长
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);

var https = require("https");

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function(response) {

    var buffer = [];
    response.setEncoding("utf8");

    response.on('data', function(data) {
      buffer.push(data);
    });

    response.on('end', function() {
      console.log(buffer.join(''));
    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);
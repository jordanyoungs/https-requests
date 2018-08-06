var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

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

getAndPrintHTML();
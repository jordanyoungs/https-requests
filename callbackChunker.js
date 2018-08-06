var https = require("https");

function getHTML (options, callback) {
  https.get(options, function(response) {

    var buffer = [];
    response.setEncoding("utf8");

    response.on('data', function(data) {
      buffer.push(data);
    });

    response.on('end', function() {
      callback(buffer.join(''));
    });
  });
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
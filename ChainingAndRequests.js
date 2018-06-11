var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')


       .on('error', function (err) {
         throw err; 
       })


       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content-type: ', response.headers['content-type']);
         console.log("Downloading image: ");
       })

       .on('end', function() {
        console.log('Download complete.');
      })

      .pipe(fs.createWriteStream('./future.jpeg')
      );

// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?

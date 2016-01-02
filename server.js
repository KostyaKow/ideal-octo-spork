/*//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=6969; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    //response.end('It Works!! Path Hit: ' + request.url);
    //console.log(response);
    //response.end("{'kostya':}");
}

//Create a server
var server = http.createServer(handleRequest);


//Lets start our server
server.listen(PORT, function(){
   //Callback triggered when server is successfully listening. Hurray!
   console.log("Server listening on: http://localhost:%s", PORT);
});
*/

var express = require('express');
var app = express();

app.get('/assmilk', function(req, res) {
   res.set('Access-Control-Allow-Origin', '*');

   response = [
      {'first':'Helen', 'last':'Cabanillas', 'country':'Peru'},
      {'first':'Kostyantyn', 'last':'Kovalskyy', 'country':'Ukraine'},
      {'first':'Tony', 'last':'Klimov', 'country':'USA'},
      {'first':'Ira', 'last':'Klimov', 'country':'Ukraine'}

   ];

   res.send(200, response);
});
app.listen(6969);



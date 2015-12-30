//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=6969; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    //response.end('It Works!! Path Hit: ' + request.url);
    //console.log(response);
    response.json(200, {'test': 'it works!'});
    //response.end("{'kostya':}");
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
   //Callback triggered when server is successfully listening. Hurray!
   console.log("Server listening on: http://localhost:%s", PORT);
});


var http = require('http');
var dispatcher = require('httpdispatcher');

const PORT=8080; 

function handleRequest(request, response){
    dispatcher.dispatch(request, response);
}

dispatcher.onGet("/page1", function(req, res) {
     console.log("Get:");
     console.log(req);
     res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    

//A sample POST request
dispatcher.onPost("/antek/event", function(req, res) {
    console.log("Got:");
    console.log(req);
});


var server = http.createServer(handleRequest);

server.listen(PORT, "http://example", 10, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
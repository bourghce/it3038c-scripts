// import modules
const http = require("http");
const fs = require("fs");
const os = require("os");
const ip = require("ip");


// web server 
http.createServer((req, res) => {
	if (req.url === "/") {
		fs.readFile("./Public/index.html", "UTF-8", (err, body) => {
		   res.writeHead(200, {"Content-Type": "text/html"});
		   res.end(body);
		});
	} else if(req.url.match("/sysinfo")) {
	    myHostName=os.hostname();
	    html=`
	      <!DOCTYPE html>
              <html>
                 <head>
                      <title>Node JS Response</title>
                 </head>
                 <body>
                     <p>Hostname: $myHostName}</p>
		     <p>IP: ${ip.address()}</p>
		     <p>Server Uptime: </p>
		     <p>Total Memory: </p>
		     <p>Free Memory: </p>
		     <p>Number of CPUs: </p>
                 </body>
              </html>`
      	   res.writeHead(200, {"Content-Type": "text/html"});
	   res.end(html);
	} else {
	   res.writeHead(404, {"Content-Type": "text/plain"});
	   res.end(`404 file Not Found at ${req.url}`);
	}
	// commenting out...
	// using back-tick ` to add full html to response w/ variables included
	// res.end(`         
	//	<!DOCTYPE html>
	//	<html>
	//	   <head>
	//		<title>Node JS Response</title>
	//	   </head>
	//	   <body>
	//		<h1>Hello!</h1>
	//		<p>${req.url}</p>
	//		<p>${req.method}</p>
	//	   </body>
	//	</html>
	// `)	

}).listen(3000) // chain 'listen' function to end of web server

// set port
// commenting out //  server.listen(3000)

// Display message
console.log("Server listening on port 3000")

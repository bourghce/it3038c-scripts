// import modules
const http = require("http");
const fs = require("fs");
const os = require("os");
const ip = require("ip");

// define variables
let myHostName = os.hostname();
let ipAddress = ip.address();
let serverUptime = os.uptime()
let totalMemory = (os.totalmem() / 1048576).toFixed(2);
let freeMemory = (os.freemem() / 1048576).toFixed(2);
let cpuCount = os.cpus().length;
  // converting uptime from seconds  to>> days minutes hours seconds
let serverUptime  = os.uptime()
let uptimeDays    = Math.floor(serverUptime / 86400);
let uptimeHours   = Math.floor(serverUptime % 86400 / 3600);
let uptimeMinutes = Math.floor(serverUptime % 3600 / 60);
let uptimeSeconds = Math.floor(serverUptime % 60); 


// web server 
http.createServer((req, res) => {
	if (req.url === "/") {
		fs.readFile("./Public/index.html", "UTF-8", (err, body) => {
		   res.writeHead(200, {"Content-Type": "text/html"});
		   res.end(body);
		});
	} else if(req.url.match("/sysinfo")) {
	    // website markup
	       html=`
	      <!DOCTYPE html>
              <html>
                 <head>
                      <title>Node JS Response</title>
                 </head>
                 <body>
                     <p>Hostname: ${myHostName}</p>
		     <p>IP: ${ipAddress}</p>
		     <p>Server Uptime: ${uptimeDays} Day(s), ${uptimeHours} Hour(s), ${uptimeMinutes} Minute(s), ${uptimeSeconds} Second(s)
		     <p>Total Memory: ${totalMemory} MB</p>
		     <p>Free Memory: ${freeMemory} MB</p>
		     <p>Number of CPUs: ${cpuCount}</p>
                 </body>
              </html>`
      	   res.writeHead(200, {"Content-Type": "text/html"});
	   res.end(html);
	} else {
	   res.writeHead(404, {"Content-Type": "text/plain"});
	   res.end(`404 file Not Found at ${req.url}`);
	}

}).listen(3000) // chain 'listen' function to end of web server


// Display message
console.log("Server listening on port 3000")

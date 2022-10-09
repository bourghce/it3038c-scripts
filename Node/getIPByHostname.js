// import DNS module( to find IP of hostname)
const dns = require('dns');

// 
const hostnameLookup = (hostname) => {
        dns.lookup(hostname, (err, addresses, family) => {
                console.log(addresses);
        });
}

//
if (process.argv.length <=2) {
	console.log("USAGE: " + __filename + " IPADDR")
	process.exit(-1)
}

// pull process.argv variable
const hostname = process.argv[2]
console.log(`Checking IP of: ${hostname}`)

hostnameLookup(hostname);

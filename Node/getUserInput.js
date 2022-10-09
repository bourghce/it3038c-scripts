
//process.stdout.write o ask user their name
process.stdout.write("Hello. What is your name? ")

// console.log does the same as 'process.stdout.write' 
// 	but w/ a line-break at the end
process.stdin.on('data', (data) => {
	console.log("Hello " + data.toString())
	process.exit()     //so that you don't need 'CTRL+c'
});

// display message after exit of application via function
process.on('exit', () => {
	console.log('Thanks for the info!')
});



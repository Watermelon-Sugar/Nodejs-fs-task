const https = require("https");
const fs = require("fs");

//using fs module to create the "result" directory
const dir = './result';
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir, {
		recursive: true
	});
}

// fetching the data from the link using the https module
let data = "";

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('end', () => {
        // writing data to results/posts.json file
        fs.writeFile("./result/posts.json", data, (err) => {
            if (err){
                return console.log(err);
            }
            console.log("File created successfully");
        })
    })
})
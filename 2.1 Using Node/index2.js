const fs = require("fs");

fs.writeFile("message.txt" , "Hello, World!", (err) => {
    if (err) throw err;
    console.log("File has been saved succesfully!");
});

// fs.rm("message.txt", (err) => {
//         if (err) throw err;
//         else(console.log("File deleted succesfully!"));
//     });



// Add new content
// Read content
// Output that in terminal

fs.appendFile("message.txt" , "\nNew Hello!", (err) => {
    if (err) throw err;
    console.log("New content has been saved succesfully!");
});

fs.readFile("message.txt",'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
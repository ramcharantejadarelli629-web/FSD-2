import fs from 'fs';
const data = "This is a sample data.";
const readData1 = fs.readFileSync('sample.txt', 'utf8');
console.log('File read successfully using asynchronous file operations.');
console.log(readData1);
console.log("before reading");
fs.writeFile("sample1.txt", data, "UTF8", (err) => {
    if(err) throw err;
    console.log("File created successfully using asynchronous file operations.");
    console.log("after writing");
    fs.readFile("sample1.txt", "utf-8", (err, readData) => {
        if(err) {
            console.log("Error reading file:", err);
            return;
        }
        console.log(readData1);
        console.log("File read successfully using asynchronous file operations.");
        fs.appendFile("sample1.txt", "\nfile data appended successfully", "utf-8", (err) => {
            if(err) throw err;
            console.log("File appended successfully.");
        });
    });
});
console.log("after reading");
console.log("completed writing using asynchronous file operations.");

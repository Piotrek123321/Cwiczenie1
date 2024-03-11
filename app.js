const http=require("http");
const student = require('./student');
const server = http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type': 'text/html'});
res.write(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentid()}`)
}).listen(3000);
console.log(`Server is running on ${server.address().port}`);
const http=require("http");
const student = require('./student');
const server = http.createServer().listen(3000);
console.log(`Server is running on ${server.address().port}`)
console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentid()}`);
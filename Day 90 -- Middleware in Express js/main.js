const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    // fs.writeFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)

    // console.log('m1')
    // res.send("Hacked by Middlware 1")
    next()
}) // if we comment out or remove the next() function from the above block of code then the code will be stuck to that middleware and not going to procedd further

// Middleware can chage the request , and even can send request

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Rohan bhai";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World 1 2 3!')
})

app.get('/about', (req, res) => {
    // res.send('Hello About!' + req.harry)
    res.send(`Hello About! ${req.harry}`)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// there is another way to use middleware is to create a function then put it into app.use
/*
app.use(express.static("public")) is a middleware function in an Express.js application that serves static files, like images, CSS, JavaScript, and HTML files, from a directory named "public". When you use this line, Express will look for these static files in the public folder relative to where your main server file (like app.js or server.js) is located.

Here's a breakdown of how it works:

1.) express.static: This is a built-in middleware in Express that serves static assets.

2.) "public": This specifies the directory to serve. You can change "public" to any directory name you want, like "assets" or "static", as long as the folder exists.

Example Folder Structure
If you have the following folder structure:
/my-app
│
├── /public
│   ├── style.css
│   ├── script.js
│   └── image.png
│
└── app.js


Then you can reference files in the public folder directly by their name in the URL. For instance:

http://localhost:3000/style.css
http://localhost:3000/script.js
http://localhost:3000/image.png
*/

// console.log(`${Date.now()}`); //`${Date.now()}` -->>Returns the current timestamp in milliseconds.

// `${req.method}` -->> Assuming req is an HTTP request object, this retrieves the HTTP method (e.g., GET, POST).

// fs.writeFileSync: This function from the fs module writes data to a file synchronously.Using writeFileSync overwrites the file each time it's called.

// fs.appendFileSync is a method in Node.js’s fs module that allows you to append data to an existing file synchronously. Unlike writeFileSync, which overwrites the file, appendFileSync adds the new content at the end of the file.

// console.log(req.headers) -->> it will print all the headers

/*
req.harry = "I am harry bhai"; -->> In this code snippet, you’re adding a new property called harry to the req (request) object :

req.harry: This assigns a new property named harry to the req object, making it accessible throughout the request's lifecycle.

"I am harry bhai": The value assigned to req.harry.


res.send('Hello About!' + req.harry)
res.send(`Hello About! ${req.harry}`)
*/


/*
Link :- https://chatgpt.com/share/6732d76b-2fe8-8011-8019-ba95b9db1b9f
Middleware in Express.js is a fundamental concept that provides a way to modify the req (request) and res (response) objects or execute code before the request is completed. Middleware functions sit between the client request and the server's final response, enabling additional functionality:-
1.)Data Augmentation (Modifying req and res)
2.)Authentication and Authorization
3.)Error Handling
4.)Request Logging
5.)Parsing Request Bodies
6.)Static File Serving
7.)Chaining and Modularity


Each middleware must call next() to pass control to the next middleware in the chain. If next() is not called, the request will hang.
*/

/*
Types of Middlewares :-
https://expressjs.com/en/guide/using-middleware.html
*/

/*
Middle for Also used for -->>
1.) logging
2.) cookies validate
3.) user logged in validate
*/
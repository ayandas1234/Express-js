/*
using the GET request method, you are limited to a maximum of 2,048 characters, minus the number of characters in the actual path.
*/
const express = require(`express`)
const blog = require('./routes/blog')
const shop = require('./routes/shop')




const app = express()
const port = 3000

app.use('/blog', blog)
app.use('/shop', shop)

app.use(express.static('public'))
// app.use(express.static('public')) -->> through this line of code we can use post request, using this code whatever is inside the public directory we can access them like in the url "localhost:3000" , after this if we write "/mypage.html" then it will access the post request,,,,,,,also we have to make sure in the mypage.html we write a async function which fetchig the post method of main.js

// this is the example of get request
app.get('/', (req, res) =>{
    console.log("Hey its a get request")
    res.send('Hello World21!')
})

// this is the example of post request
app.post('/', (req, res) =>{
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

// this is the example of put request
app.put('/', (req, res) =>{
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

// this is the example of delete request
app.delete('/', (req, res) =>{
    console.log("Hey its a delete request")
    res.send('Hello World delete!')
})

/*
This is known as Chaining of Request --->>>

app.get('/', (req, res) =>{
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) =>{
    console.log("Hey its a post request")
    res.send('Hello World post!')
}).put('/', (req, res) =>{
    console.log("Hey its a put request")
    res.send('Hello World put!')
}).delete('/', (req, res) =>{
    console.log("Hey its a delete request")
    res.send('Hello World delete!')
})

*/

app.get("/index", (req, res) => {
    console.log("Hey its index")
    // res.send('Hello World index!')
    res.sendFile('templates/index.html', { root: __dirname })
})

/*
app.get("/index", (req, res) => {
    console.log("Hey its index");
    // res.send('Hello World index!')
    res.sendFile('templates/index.html', { root: __dirname });
});
a route handler for GET requests to "/index". When a request is made to "/index", the server logs a message to the console and sends an HTML file (named index.html) as the response --->>>

1.) app.get("/index", (req, res) => { ... }):

This sets up a GET route at the path "/index".

app.get() is used specifically for handling GET requests.

"/index" is the URL endpoint, meaning when a user navigates to http://your-server-address/index, this function will handle that request.

(req, res) => { ... } is a callback function with two parameters:

req: The request object, containing information about the client’s request.

res: The response object, used to send a response back to the client.

2.) console.log("Hey its index");:

Logs "Hey its index" to the server console whenever this route is accessed. This can be helpful for debugging or confirming that the route is being reached.


3.) res.sendFile('templates/index.html', { root: __dirname });:

res.sendFile() is used to send a file as the response to the client.

'templates/index.html' specifies the path to the file you want to send. Here, the file is located in a directory named templates in the project root.

{ root: __dirname } is an option that sets the root directory for relative file paths.

__dirname is a Node.js global variable representing the directory in which the current script is located.
*/

app.get("/api", (req,res)=>{
    res.json({a:1 , b:2 , c:3 , d:4 , name:["harry", "ayan"]})
})

app.listen(port, ()=>{
    console.log(`Example app listeniing on port ${port}`);
})
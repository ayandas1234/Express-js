// Normal http server running node js -->>

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World123');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// install express syntax -->>npm i express or npm install express 

/*
when we want to install particular express version then we write -->> npm i express@3 or npm i express@2

simply after At the rate (@) whatever versiion we want to use just write the number
*/



// Express Server Running-->>
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.use(express.static('public')) -->> app.use is a Middleware in Express
// app.use is a function that takes a middleware function as an argument
// express.static is a built in function of middleware
// here express.static makes public folder as public
// app.use(express.static('public')) -->> here insiide the inverted comma public is the folder name what ever we want to public we put everything iinside a folder then make that folder as public then we can access those thiing through browser

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug/:second', (req, res) => {
//     // logic to fetch {slug} from the db
//     // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
//     res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

/*
?mode=dark&region=in -->> this kind of things goes under request query section , after question mark everything goes under query parameter
*/

app.get('/blog/:slug/:second', (req, res) => {
    // logic to fetch {slug} from the db
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

/*
A schema type for slugs is typically used to create unique URLs in express , basically it works as argument or parameter passing
*/

/*
The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. 
 It returns an Object.

The req.params property is essential for accessing route parameters in Express.js.

it means whereever any route or URL mention '/' or '/blog/:slug'parameter mentions then to access to send them we use req.params
*/

/*
The res.send() function sends the HTTP response. The body parameter can be a String or a Buffer object or an object or an Array

This function accepts a single parameter body that describes the body to be sent in the response. e.g., string, array, object etc.
*/

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// by default 
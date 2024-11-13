const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    // res.send('Hello World')
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText , arr})
})


app.get('/blog/:slug', (req, res) => {
    // res.send('Hello World')
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*
app.set('view engine', 'ejs'); -->> This line of code is commonly used in a Node.js application to set EJS (Embedded JavaScript) as the templating/view engine. Here's a breakdown:

Explanation:-

1.) app.set: This is a method provided by the Express framework to configure various application settings.

2.) 'view engine': This specifies the setting name. In this case, it tells Express which template engine to use.

3.) 'ejs': This is the value assigned to the 'view engine' setting. It indicates that EJS will be used for rendering views.

*/


/*
using ejs template we can insert data inside a file which extensio should be "".ejs" and most important the file should be under a views directory

this is the cod esnippet of insering data through ejs template-->>

<%= variable_name %>  // this is used for inserting data inside a file which is in string

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    res.render("index", { siteName: siteName, searchText: searchText})
})

The siteName and searchText variables hold values ("Adidas" and "Search Now", respectively).

res.render("index", { ... }) renders the index.ejs file in the views directory.

The second argument is an object that passes the data (siteName and searchText) to the view, it means we pass the variable iin a object with a same name as variable
*/

/*
Dynamic Data Rendering:

<%= siteName %>: Inserts the value of siteName ("Adidas") into the HTML.
<%= searchText %>: Inserts the value of searchText ("Search Now") into the HTML.
*/
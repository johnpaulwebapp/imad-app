var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
    'article-one' : {
    title : 'Article One ! John Paul ',
    heading :  'Article One',
    date: 'Aug 21,2017',
    content : `
    <p>
                    This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.
                </p>
                   <p>
                    This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.
                </p>
                   <p>
                    This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.This is the Content for My First Article.
                </p>`
   },
    'article-two' : { title : 'Article Two ! John Paul ',
    heading :  'Article Two',
    date: 'Aug 25,2017',
    content : `
    <p>
                    This is the Content for My Second Article.This is the Content for My Second Article.
                </p>`},
    'article-three' : { 
       title : 'Article Three ! John Paul ',
    heading :  'Article Three',
    date: 'Aug 27,2017',
    content : `
    <p>
                    This is the Content for My third Article.This is the Content for My third Article.This is the Content for My third Article
                </p>`}
};
    
    function createTemplate (data) {
       var title = data.title;
       var date = data.date;
       var heading = data.heading;
       var content = data.content;
    
    var htmlTemplate=`
    <html>
        <head>
        <Title> 
            ${title}
        </Title>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class='container'>
            <div>
            <a href ='/'>HOME</a>
            </div>
        <hr/>
                <div>
            <h3>
               ${heading}
            </h3>
                    <div>
                ${date}
            </div>
                        <div>
               ${content}
                </div>
            </div>
        </div>
    </body>
    </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
    
app.get('/:articleName', function (req,res) {
    //articleName = article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

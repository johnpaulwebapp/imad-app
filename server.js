var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
    Title : 'Article One ! John Paul ',
    Heading :  'Article One',
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
   
    };
    function createtemplate (data) {
       var title = data.title;
       var date = data.date;
       var heading = data.heading;
       var content = data.content;
      
        var htmltemplate=`
    
        <html>
    <head>
        <Title> 
            ${Title}
        </Title>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class='container'>
            <div>
            <a href ='/'>home</a>
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
app.get('/article-one', function (req,res) {
    res.sendFile(createtemplate (article-one.html));
});
app.get('/article-two', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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

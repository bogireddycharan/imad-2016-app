var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {.
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var articleone= {
    title:"Article one gurucharan",
    heading:"guru article",
    date:"sept 25",
    content: 
    
   " <p> hi this is para under content</p>",
    
};

var htmlTemplate= 
{

<html>
    <head>
        <title>
          ${title}
       
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
       
            
        </head>
        <body>
        <div class ="container">
            <div>
                <a href="/">intiki</a>
                
            </div>
            
            <div> 
            <a href="www.gmail.com">gmail </a></div>
            <div> <a href="www.facebook.com">fb</a>
            </div>
            <div><h2><b>${heading}</b> </h2>        
            <hr>
            </div>
            <div><p>>Im guru ...this is my page>Im guru ...this is my page>Im guru ...this is my page</p> >Im guru ...this is my page>Im guru ...this is my page>Im guru ...this is my page>Im guru ...this is my page>Im guru ...this is my page<p>>Im guru ...this is my page>Im guru ...this is my page>Im guru ...this is my page </p> </div>
            <div>
                <div>sept 23 2016</div>
                <p>hi ra</p> 
                <p>chaale</p>
            </div>
        </div>    
        </body>
    
</html>"

 };


app.get('/article-one',function (req, res){
      res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    
});
app.get('/article-two',function (req, res){
    res.send('Article one two requested and ....');
    
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

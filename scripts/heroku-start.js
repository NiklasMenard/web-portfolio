const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Your static pre-build assets folder
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Root Redirects to the pre-dist assets
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'dist'));
});

// Any Page Redirects to the pre-dist assets folder index.html that // will load the react app
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

app.listen(port, ()=>{
  console.log("Server is running on port: ", port)
})
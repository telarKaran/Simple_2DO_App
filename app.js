const path = require("path");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

var listOfItems = ["Something in this list"];

app.use(bodyParser.urlencoded({extended:true}));

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
	res.render('index.ejs',{newListItems: listOfItems});
});

app.post('/',(req,res)=>{
	// res.end(JSON.stringify(req.body));

	var item = req.body.todo;
    //push 'item' data to 'items' array
    listOfItems.push(item);
    //reload to root
    res.redirect("/");
	console.log(req.body);

})
const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log("Listning on port 3000");
});
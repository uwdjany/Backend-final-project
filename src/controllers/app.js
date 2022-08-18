
//static folder
app.use('/public' ,express.static(path.join(__dirname, 'public')));

//Body Parser Middleware

app.use(bodyParser.json());
app.get('/sending', (req,res) =>{
    res.render('sendemail');
});


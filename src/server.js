import express from 'express';
import "dotenv/config";
import  bodyParser from 'body-parser';
import mongoose from 'mongoose';
import route from './routes';
import { reset } from "nodemon";

import cors from "cors";
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res) => {
    reset.send('congrts!')
  })
  app.post('/',async(req,res) =>{
    const {email} = req.body;
  
    let transporter = nodemailer.createTransport({
      host:"smtp.ethereal.email",
      port:587,
      secure:false,
      auth:{
        user:"djanatiuwase@gmail.com",
        pass:"uwase12345",
      }
    });
    const msg ={
      from:'"the Express App" <djanatiuwase@gmail.com>',
      to: "${uwasey7@gmail.com}",
      subject:"hello",
      text:"hey you"
    }
    const info = await transporter.sendMail(msg);
    console.log("message sent:%s", info.messageId);
    console.log("preview URL:%s",nodemailer.getTestMessageUrl(info));
    res.send("email.sent")
  })













app.use('/',route);


//database configuration
const database =process.env.DATABASE;
mongoose.connect(database,
    {useNewUrlParser:true,
    useUnifiedTopology:true,

})
.then(()=>{
    console.log("database is well connected");
})




// server configuration

const port = process.env.PORT || 4040;
app.listen(port,()=>{
    console.log(`server is running on port${port}`);

});

export default app

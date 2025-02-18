const multer =  require('multer');
const express = require("express");
const app =  express();

const upload = multer(
    {
        storage:multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, 'uploads/')
            },
            filename:function (req,file,cb){
                cb(null,file.fieldname + "-" + Date.now() + ".jpg")
            }
        })
    }
).single('image');


app.post( "/upload",upload, (req, res) => {
    res.send( "File Uploaded" );
})
app.listen(5000);
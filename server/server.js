const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Note = require('./models/note');
const bodyParser = require('body-parser');

const app = express();

//for POST request
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

//db 
const dbURI = 'mongodb+srv://bayeed:12345@cluster0.7myjj.mongodb.net/note-start?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) => {
        app.listen(5000);
        console.log("listening on port 5000")
    })
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    Note.find().sort({createdAt: -1})
        .then((result) => {
            //console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.post('/', (req, res)=>{
    console.log("this is the request body: ", req.body)
    const note = new Note(req.body);
    note.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
})

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log("the id is: ", id);

    Note.findByIdAndDelete(id)
    .then(result =>{
        //redirect to the notes page
        res.json({redirect: '/'});
        console.log("server is getting the delete request")
    })
    .catch(err => console.log(err));
})

// app.get('/', cors(), (req, res) => {
//     const notes = [
//         {
//             title: "hobby",
//             desc : "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop "
//         },
//         {
//             title: "fruit",
//             desc : "re going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of mo"
//         },
//         {
//             title: "knuckle",
//             desc : "m Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem"
//         }
//     ]

//     res.json(notes);
// })

// app.listen(5000, () => console.log("listening.."));
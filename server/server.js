const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', cors(), (req, res) => {
    const notes = [
        {
            title: "hobby",
            desc : "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop "
        },
        {
            title: "fruit",
            desc : "re going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of mo"
        },
        {
            title: "knuckle",
            desc : "m Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem"
        }
    ]

    res.json(notes);
})

app.listen(5000, () => console.log("listening.."));
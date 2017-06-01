const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    console.log('get /');
    // setTimeout(() => {
    res.json([{id:1, label: 'l'},{id:2, label:'a'}]);
    // }, 2000);
    //res.json(history);
});

app.listen(3001, () => {
    console.log('App listening on port 3001');
});


const history = [
    {
        type: "text/operation",
        author: "me/client",
        date: "msg date",
        content: "msgtext/operationid"
    },
    {
        type: "text/operation",
        author: "me/client",
        date: "msg date",
        content: "msgtext/operationid"
    }
];
const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');


const app = express();
app.use(bodyParser.json());
app.use( express.static('/../public/build' ) );

const messagesURL = '/api/messages'
app.post(messagesURL, mc.create);
app.get(messagesURL, mc.read);
app.put(`${messagesURL}/:id`, mc.update);
app.delete(`${messagesURL}/:id`, mc.delete)

app.listen(3000, ()=>{
    console.log('listening...');
})
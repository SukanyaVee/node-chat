
var messages = [];
var idT = 0;

module.exports = {
    create: (req, res)=> {
        messages.push({
            id: idT,
            text: req.body.text,
            time: req.body.time
        })
        idT++;
        res.status(200).send(messages)
    },
    read: (req,res)=> {
        res.status(200).send(messages)
    },
    update: (req, res)=>{
        // const messId = req.params.id;
        const messIndex =  messages.findIndex(message=>message.id==req.params.id);
        // let message = messages[messIndex];
        messages[messIndex]={
            id: req.params.id,
            text: req.body.text||messages[messIndex].text,
            time: messages[messIndex].time};
            res.status(200).send(messages);
    },
    delete: (req,res) => {
        const messIndex =  messages.findIndex(message=>message.id==req.params.id);
        // let message = messages[messIndex];
        messages.splice(messIndex,1);
        res.status(200).send(messages);
    }
}


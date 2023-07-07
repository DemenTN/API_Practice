const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'birthName': 'whoCares'
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}`)
})
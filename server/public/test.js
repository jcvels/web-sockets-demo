const socket = io.connect("localhost:3000", {'forceNew':true});

const socketTest = (menssage) => { 
fetch('https://random-word-api.herokuapp.com/word?lang=es&number=3')
    .then( data => data.json() )
    .then( data => {
        socket.emit('test-message', { text:`${data[0]}.${data[1]}.${data[2]}` })
    })
}

setInterval( () => socketTest(new Date().getTime()), 5000 )
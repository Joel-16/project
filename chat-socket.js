const socket = io("http://localhost:4000")

const message = document.getElementById('message')
const messsges = document.getElementById('messages')

const handle = () => {
   socket.emit('search', message.value)
}

socket.on('search', (data)=>{
   handlenew(data)
})

const handlenew=(message)=>{
   messages.appendChild(buildmessage(message))
}

const buildmessage= (message) =>{
   const li = document.createElement("li")
   li.appendChild(document.createTextNode(message))
   return li
}
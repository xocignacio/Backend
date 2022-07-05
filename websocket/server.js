const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

const mensajes = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

io.on("connection", (socket) => {                    /*  connection siempre esta como primer parametro, indica la coneccion por primera vez (handshake) */
  console.log("Nuevo cliente conectado!");

  /* Envio los mensajes al cliente que se conectó */
  socket.emit("mensajes", mensajes);

  socket.on('nuevoMensaje', mensaje =>{
    mensajes.push(mensaje);
    io.sockets.emit('mensajes', mensajes);         //// sockets es para enviar para todos  /// mensajes es el array que consiste
  })
  
});

const PORT = 8080 || process.env.PORT;
const connectedServer = httpServer.listen(PORT, function () {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${
      connectedServer.address().port
    }`
  );
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);



/* httpServer.listen(3000, () => console.log('listening on port 3000'));    /// arranco el server con httpserver

//////// prendo socket ///// 
io.on("connection", (socket) => {                ///llamo al io que esta en linea 7  /// connection siempre esta como primer parametro, indica la coneccion por primera vez (handshake)
    console.log("Nuevo cliente conectado!");
  
    /* Envio los mensajes al cliente que se conectó 
    socket.emit('mensajes', mensajes);         //// mensajes es el identificador (nombre de nuestro evento), tiene que estar tanto del lado del servidor y el cliente. El segundo parametro (informacion que queremos transmitir)
  /* 
    socket.on('nuevoMensaje', mensaje =>{
      mensajes.push(mensaje);
      io.sockets.emit('mensajes', mensajes);
    }) 
    
    socket.on ('mensaje', data => {                 
        io.sockets.emit ("mensajes", data);   //data viene del front       /// mando a todos los clientes la data que me entra por el input
    })

  });

 */
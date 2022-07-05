const socket = io.connect();

function makeHTML(mensajes) {              
  return mensajes.map((elem, index) => {                ////// crea una matris de la matris original
      return (`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");             ///// une todos los elementos de la matris en un string
}

function render(data) {
  const html = makeHTML(data)                                      //// le paso la funcion que cree arriba y le paso la data 
  document.getElementById('mensajes').innerHTML = html;            //// mensajes es el id del div de mi html 
}

socket.on('mensajes', mensajes => {                              
  render(mensajes)
});

function addMessage(e) {                       ///// la fn recoge los valores de inputs de autor y texto (en el html) y los envia por el socket con el mensaje new-mensaje para que lo escuche el servidor
  const mensaje = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value,
  };
  socket.emit('nuevoMensaje', mensaje);            //// mando del front al back
  return false;
}
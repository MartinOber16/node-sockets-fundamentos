var socket = io();
        
// on: escuchar sucesos
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Martin',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Servidor: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});


const http = require('http');



//la req es lo se me solicita en los headers de la peticion, argumentos y res es lo que responde a el cliente
http.createServer( (req, res) =>{
    // res.writeHead(200, { 'Content-Type': 'application/json' })//retorno un archivo de texto
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' })//
    
    // res.write('id, nombre\n');
    // res.write('1, Xiomara\n');
    // res.write('2, Dilan\n');
    // res.write('3, Maria\n');
    // res.write('4, Sofia\n');

    res.write('Hola Mundo');

    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto',8080);
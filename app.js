const express = require('express');
const hbs = require('hbs');

require('dotenv').config();
const app = express();
port = process.env.PORT;

//rHandlebars
app.set('view engine', 'hbs')//renderizo vistas
hbs.registerPartials(__dirname + '/views/partials');

//middelware es una funcion que se ejecuta antes de hacer otra cosa
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {//renderizamos una vista gracias a hbs
        nombre: 'Xiomara Muñoz',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {//renderizamos una vista gracias a hbs
        nombre: 'Xiomara Muñoz',
        titulo: 'Module Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {//renderizamos una vista gracias a hbs
        nombre: 'Xiomara Muñoz',
        titulo: 'Module Elements'
    });
});
// app.get('/generic',  (req, res)=> {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements',  (req, res)=> {
//     res.sendFile(__dirname + '/public/elements.html');
// })


// app.get('*',  (req, res)=> {
//     res.sendFile(__dirname + '/public/404.html');//path
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
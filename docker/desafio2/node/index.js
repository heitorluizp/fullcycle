const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config)

const nomes = ['Heitor', 'Maria', 'João', 'Ana'];

nomes.forEach((nome) =>{
    const sql = `INSERT INTO people(name) values('${nome}')`
    connection.query(sql)
})
connection.end()

app.get('/', (req, res) => {
    let listaHtml = '<h1>Full Cycle Rocks!</h1>';
    listaHtml += '<ul>';
    nomes.forEach((nome) => {
        listaHtml += `<li>${nome}</li>`;
    });
    listaHtml += '</ul>';
    res.send(listaHtml);
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
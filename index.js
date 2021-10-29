var Reader = require("./Reader");
var Processor = require("./Processor")
var Table = require("./Table")


var leitor = new Reader();






 async function main(){
    

    var dados = await leitor.Read('./users.csv');
    var tratamento = Processor.processa(dados)
    var usuarios = new Table(tratamento);
    console.log(usuarios.RowCount)
    console.log(usuarios.ColumnCount)
    


 } 

main();


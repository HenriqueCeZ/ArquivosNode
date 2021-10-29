var Reader = require("./Reader");
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var PDFWriter = require("./PDFWriter")


var leitor = new Reader();
var escritor = new Writer();






 async function main(){
    

    var dados = await leitor.Read('./users.csv');
    var tratamento = Processor.processa(dados)
    var usuarios = new Table(tratamento);
    console.log(usuarios.RowCount)
    console.log(usuarios.ColumnCount)
    var html  =  await HtmlParser.Parse(usuarios)
    console.log(html)
    escritor.Write("meuhtmlgerado.html",html)
    PDFWriter.WritePDF("meupdfgerado.PDF",html)

 } 

main();


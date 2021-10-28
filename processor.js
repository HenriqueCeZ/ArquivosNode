

class Processor{
      static processa(data){
        var a = data.split("\r\n");    // \r \n   para quebra de linha
        var rows = []; 
        a.forEach(row =>{
          var arr =  row.split(",")
          rows.push(arr)

        })
        return rows
      }
}



module.exports = Processor;
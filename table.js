class Table{
    constructor(arr){
        this.header = arr[0]//pegando a primeira linha da table
        arr.shift();// removendo a primeira linha da table
        this.rows = arr; // pegando todas as linhas como atributo
    }
   get RowCount(){
        return this.rows.length; // contando linhas

    }
    get ColumnCount(){
        return this.header.length // contando colunas pelo cabeçalho da table
    }
}

module.exports = Table;
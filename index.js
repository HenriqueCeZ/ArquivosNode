const fs = require('fs');


fs.readFile("./Henrique",{encoding:'utf-8'},(erro, dados)=>{//leitura de arquivos
    if(erro){
        console.log('Error')
    }else{
        console.log(dados);
    }

})

fs.writeFile("./Henrique","Novo conteúdo do arquivo!",(err)=>{
    if(err){
        console.log("Erro durante o salvamento...")
    }
})
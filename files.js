const fs = require('fs');


fs.readFile("./Henrique",{encoding:'utf-8'},(erro, dados)=>{//leitura de arquivos
    if(erro){
        console.log('Error')
    }else{
        console.log(dados);
    }

})

fs.writeFile("./Henrique","Novo conteúdo do arquivo!",(err)=>{//Escrevendo no arquivo   
    if(err){
        console.log("Erro durante o salvamento...")
    }
})

fs.readFile("./test.json",{encoding:'utf-8'},(erro, dados)=>{// lendo arquivos json e usando a função parse.json
    
    if(erro){
        console.log('error'+erro)
    }else{
        var test = JSON.parse(dados)
        console.log("arquivo json"+ test)
        test.nome = "Henrique  Cezar A."
        console.log("Seu nome é:"+ test.nome)
        fs.writeFile("./test.json", JSON.stringify(test),(erro)=>{//escrevendo e transformando json em string
            if(erro){
                console.log("Um erro aconteceu durante a escrita!")
            }
            
        })
    }

})
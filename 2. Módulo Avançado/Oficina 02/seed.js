const {PrismaClient} = require("@prisma/client");
const dados_alunos = require("./data/dados_alunos");
const prisma = new PrismaClient();

async function seed(){
    try{
        console.log("Iniciando preenchimento da tabela de alunos");

        // Percorre cada aluno informado na lista
        for(aluno of dados_alunos){
            // Chama a função para criar cada registro
            await prisma.aluno.create({
                data:{
                    nome: aluno.nome,
                    email: aluno.email,
                    idade: parseInt( aluno.idade ),
                }
            })
        }
    }
    catch( e ){
        console.error(e);
        process.exit(1);
    }
    finally{
        await prisma.$disconnect();
        console.log("Alunos cadastrados com sucesso.");
    }
}

seed();
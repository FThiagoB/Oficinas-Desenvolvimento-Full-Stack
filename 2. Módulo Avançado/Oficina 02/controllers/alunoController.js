const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.listaAlunos = async (req, res) => {
    try{
        // Retorna os registros em ordem crescente de ID
        const alunos = await prisma.aluno.findMany({
            orderBy:{
                id: 'asc',
            },
        });

        res.status(200).json( alunos );
    }
    catch(e){
        console.log(e);
        res.status(500).json({"message": e.message});
    }
    finally{
        await prisma.$disconnect();
    }
};

exports.cadastraAluno = async (req, res) => {
    try{
        const novo_id = parseInt(req.body.id);          // Opcionalmente podemos especificar o id desejado
        const novo_nome = req.body.nome;
        const novo_email = req.body.email;
        const nova_idade = parseInt( req.body.idade );

        // Verifica se todos os campos necessários foram informados
        if( !novo_nome || !novo_email || !nova_idade ){
            const message_error = {};
            message_error.message = "Requisição inválida, preencha os campos obrigatórios:";
            message_error.message += (!novo_nome?" nome ":"") + (!novo_email?" email ":"") + (!nova_idade?" idade ":"");
            res.status(400).json( message_error );
        };

        // Monta a query do prisma usando uma variável
        const query_prisma = {};
        query_prisma.data = {};

        query_prisma.data.nome = novo_nome;
        query_prisma.data.email = novo_email;
        query_prisma.data.idade = nova_idade;

        // Se for especificado, adiciona o campo de id na query
        if( novo_id ) query_prisma.data.id = novo_id;
        
        // Realiza a query 
        const novo_aluno = await prisma.aluno.create( query_prisma );
        res.status(200).json( novo_aluno );
    }
    catch(e){
        console.log(e);

        // Trata alguns casos de erro do Prisma
        switch(e.code){
            // Se o e.code for P2002, o campo email ou o id estão duplicados
            case "P2002":
                res.status(400).json({"message": `${e.meta.target} informado já existe.`});
                break;
            
            default:
                res.status(500).json({"message": e.message});
        }
    }
    finally{
        await prisma.$disconnect();
    }
}

exports.deleteAluno = async (req, res) => {
    try{
        const id_procurado = parseInt( req.params.id );

        const aluno_deletado = await prisma.aluno.delete({
            where:{
                id: id_procurado,
            },
        });

        res.status(200).json( aluno_deletado );
    }
    catch(e){
        console.log(e);

        switch(e.code){
            // Se P2025: id informado não existe na tabela
            case "P2025":
                res.status(400).json({"message": "Não há dados para serem deletados com esse id."});
                break;
            
            default:
                res.status(500).json({"message": e.message});
        }
    }
    finally{
        await prisma.$disconnect();
    }
}

exports.updateAluno = async (req, res) => {
    try{
        const id_procurado = parseInt( req.params.id );

        // Campos que podem ser passados
        const novo_id = parseInt(req.body.id);           // Opcionalmente podemos especificar o id desejado

        const novo_nome = req.body.nome;
        const novo_email = req.body.email;
        const nova_idade = parseInt( req.body.idade );

        // Verifica se a idade foi informada mas a conversão para int retornou NaN (erro na conversão)
        if( req.body.idade && Number.isNaN(nova_idade) )
            res.status(400).json({"message": "Requisição inválida: a idade deve ser um inteiro."})
        
        // Monta a query do prisma por meio de uma variável
        const query_prisma = {};
        query_prisma.where = { id: id_procurado };
        query_prisma.data = {};

        // Preenche a query de acordo com os campos informados na requisição (só precisa passar o que for mudar)
        if( novo_id ) query_prisma.data.id = novo_id;
        if( novo_nome ) query_prisma.data.nome = novo_nome;
        if( novo_email ) query_prisma.data.email = novo_email;
        if( nova_idade ) query_prisma.data.idade = nova_idade;

        const aluno = await prisma.aluno.update( query_prisma );
        res.status(200).json( aluno );
    }
    catch(e){
        console.log(e);
        
        switch(e.code){
            // Usa os códigos de erro para tratar cada situação
            case "P2025":
                res.status(400).json({"message": "Não há dados para serem modificados com esse id."});
                break;
            
            case "P2002":
                res.status(400).json({"message": `${e.meta.target} informado já existe.`});
                break;

            default:
                res.status(500).json({"message": e.message});
        }
    }
    finally{
        await prisma.$disconnect();
    }
};
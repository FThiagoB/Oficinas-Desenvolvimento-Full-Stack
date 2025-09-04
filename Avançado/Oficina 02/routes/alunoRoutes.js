const {Router} = require("express");
const alunoController = require("../controllers/alunoController");
const router = Router();

// Especifica os métodos do controlador que lidam com cada rota
router.get("/alunos", alunoController.listaAlunos);
router.post("/alunos", alunoController.cadastraAluno);
router.put("/alunos/:id", alunoController.updateAluno);
router.delete("/alunos/:id", alunoController.deleteAluno);

module.exports = router;
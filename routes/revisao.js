const express = require('express');
const router = express.Router()

router.post('/alunos', function(req, res){

    const {nome, turma, notas} = req.body

    if(!notas.every(nota => nota >= 0 && nota <= 10)){
        res.status(400).json({error: 'Notas inválidas. As notas devem estar entre 0 e 10'});
    }

    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    res.json(`O aluno ${nome} da turma ${turma} teve as notas ${notas} e uma média de ${media}`)
})

router.post('/aprovados', function(req, res){

    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    const aprovados = alunos.filter(aluno => aluno.media >= 7);

    res.json({aprovados})
})

router.post('/recuperacao', function(req, res){

    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    const recuperacao = alunos.filter(aluno => aluno.media >= 5 && aluno.media < 7);

    res.json({recuperacao})
})

router.post('/reprovados', function(req, res){

    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    const reprovados = alunos.filter(aluno => aluno.media < 5);

    res.json({reprovados})
})

router.put('/alterarTurmaEparaB', function(req, res) {
    alunos.forEach(aluno => {
        if (aluno.turma === 'E') {
            aluno.turma = 'B';
        }
    });
    return res.json({ message: 'Turma E alterada para B com sucesso' });
});

router.delete('/alunos/teste', (req, res) => {
    const alunosExcluidos = alunos.filter(aluno => aluno.nome === 'Teste');
    alunosExcluidos.forEach(aluno => {
        const index = alunos.indexOf(aluno);
        if (index !== -1) {
            alunos.splice(index, 1);
        }
    });
    return res.json({ message: 'Alunos com o nome "Teste" excluídos com sucesso' });
});

module.exports = router
/* const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];

const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];

const estudantes = ["João", "Ana", "Cris"]; */

const cursos = [
    {
        curso: "HTML e CSS", 
        descrição:"",
        duração: "1 Mês", 
        valor: 500
    }, 
    {
        curso: "JavaScript", 
        descrição:"",
        duração: "2 Meses", 
        valor: 900
    },
    {
        curso: "APIs REST", 
        descrição:"",
        duração: "2 Meses", 
        valor: 2000
    }]

    const turmas = [
    {
        turma:"Hipátia",
        curso:"JavaScript",
        inicio:"30/11/2022", 
        término:"30/01/2023", 
        numeroDeAlunos: 150,
        período: "noturno",
        concluída: false

    },

    {
        turma:"Sibyla",
        curso:"JavaScript",
        inicio:"30/10/2022", 
        término:"30/12/2022", 
        numeroDeAlunos: 200,
        período: "integral",
        concluida: false

    },

    {
        turma:"Curie",
        curso:"HTML e CSS",
        inicio:"15/09/2022", 
        término:"15/10/2022", 
        numeroDeAlunos: 180,
        período: "noturno",
        concluida: true

    },

    {
        turma:"Zhenyi",
        curso:"HTML e CSS",
        inicio:"01/11/2022", 
        término:"01/01/2023", 
        numeroDeAlunos: 80,
        período: "integral",
        concluida: false

    },

    {
        turma:"Clarke",
        curso:"HTML e CSS",
        inicio:"04/07/2022", 
        término:"04/09/2022", 
        numeroDeAlunos: 200,
        período: "noturno",
        concluida: true

    },

    {
        turma:"Blackwell",
        curso:"APIs REST",
        inicio:"20/03/2022", 
        término:"20/06/2022", 
        numeroDeAlunos: 100,
        período: "integral",
        concluida: true

    },

    {
        turma:"Elion",
        curso:"APIs REST",
        inicio:"12/01/2022", 
        término:"12/06/2022", 
        numeroDeAlunos: 200,
        período: "noturno",
        concluida: true

    },

    {
        turma:"Burnell",
        curso:"APIs REST",
        inicio:"18/10/2022,", 
        término:"18/04/2023", 
        numeroDeAlunos: 90,
        período: "integral",
        concluida: false

    }

    ]

    const estudantes = [

    {
        estudante:"Chris Evans", 
        turma:"Hipátia",
        curso:"JavaScript",
        valor:900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },   

    {
        estudante:"Halle Berry", 
        turma:"Burnell",
        curso:"APIs REST",
        valor:100,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },   

    {
        estudante:"Lashana Lynch", 
        turma:"Zhenyi",
        curso:" HTML e CSS",
        valor:500,
        nParcelas: 1,
        desconto: true,
        parcelas: 0
    }   

    ]
        /*const parcelarCurso = function(quantosCursos, parcela){
            let valorTotal
            let valorDesconto
            const carrinhoCursos = [500, 900, 2000]
            if(quantosCursos === 1 && parcela <= 2){
                valorDesconto = cursos[0].valor - (cursos[0].valor * 0.2)
                console.log(`O curso ${cursos[0].curso} ficou no valor total de ${valorDesconto}. Em ${parcela}x de ${cursos[0].valor / parcela} reais. Foi concedido desconto de 20%`)
            }else if (quantosCursos === 3 && parcela <=2){
                valorDesconto = cursos[0].valor - (cursos[0].valor * 0.2)
            }else {
                valorTotal = cursos[0].valor
                console.log(`O curso ${cursos[0].curso} ficou no valor total de ${valorTotal}. Em ${parcela}x de ${cursos[0].valor / parcela} reais.`)
            }
        }*/

        function buscarCurso (nomeDoCurso){
            for(todosCursos of cursos){
                if(todosCursos.curso === nomeDoCurso){
                    return todosCursos
                }
            }
            
        }

        function buscarTurma (nomeDaTurma) {
            for(todasTurmas of turmas){
                if(todasTurmas.turma === nomeDaTurma){
                    return todasTurmas
                }
            }
        }

        function buscarEstudante(nomeDoEstudante){
            for(todoEstudante of estudantes){
                if(todoEstudante.estudante === nomeDoEstudante){
                    return todoEstudante
                }
            }
        }

        function matricular(nomeDoAluno, nomesDosCursos, nomesDasTurmas, numerosDasParcelas){
            estudantes.push({estudante: "Calvin Klein", turma: "Clarke", curso: "Javascript", valor:900, nParcelas: numerosDasParcelas})
            console.log(estudantes)
            console.log(`O ${nomeDoAluno} foi matriculado no curso ${nomesDosCursos} e na turma ${nomesDasTurmas}`)
        }
    matricular("Calvin Klein", "Javascript", "Clarke", 5)


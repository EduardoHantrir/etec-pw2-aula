const express = require('express');
const livroModel = require('../model/livroModel');
<<<<<<< HEAD
const upload = require('../helper/upload');
=======
const upload = require('../helpers/upload/upload');
>>>>>>> 3a8690813a71cc3b513f495e3c762679c7b1eb4d

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/livro/inserir', upload.array('imagens', 2), (req,res)=>{
    
    let { titulo, preco, detalhes, tblCategoriumId } = req.body;
<<<<<<< HEAD
    let imagem_peq = req.imagens[0].path;
    let imagem_grd = req.imagens[1].path;
=======

    let imagem_peq = req.files[0].path;
    let imagem_grd = req.files[1].path;
>>>>>>> 3a8690813a71cc3b513f495e3c762679c7b1eb4d

    livroModel.create(
        {
            titulo,
            preco,
            imagem_peq,
            imagem_grd,
            detalhes,
            tblCategoriumId
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'LIVRO CADASTRADO COM SUCESSO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

});

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/livro/selecionar', (req,res)=>{
    livroModel.findAll()
        .then(
            (livros)=>{
                res.json(livros);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.get('/livro/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    livroModel.findByPk(id)
        .then(
            (livro)=>{
                res.json(livro);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});

router.get('/livro/selecionar/:titulo', (req,res)=>{
    let {titulo} = req.params;
    livroModel.findOne({where:{titulo:titulo}})
        .then(
            (livro)=>{
                res.json(livro);
            }
        )
        .catch(
            (error)=>{
                return res.status(500).json({
                    errorStatus:true,
                    mensageStatus: error
                });
            }
        );
});


/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/livro/alterar', (req,res)=>{

    let {titulo, preco, imagem_grd, imagem_peq, detalhes, tblCategoriumId, id} = req.body;

    livroModel.update(
        {
            titulo,
            preco,
            imagem_grd,
            imagem_peq,
            detalhes,
            tblCategoriumId
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus: 'LIVRO ALTERADO COM SUCESSO!'
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/livro/excluir/:id', (req,res)=>{
    
    let {id} = req.params;

    livroModel.destroy(
<<<<<<< HEAD
        {where:{id}} 
=======
        {where:{id}}
>>>>>>> 3a8690813a71cc3b513f495e3c762679c7b1eb4d
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'LIVRO EXCLUIDO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );

})

module.exports = router;
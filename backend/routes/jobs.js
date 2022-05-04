const express = require('express');
const jobOffer = require('../models/jobOffer');
const router = express.Router();
const jobScrapper = require('../scrapper/jobScrapper');

router.get('/', (req, res) => {
    res.json({message: 'API retornar lista de jobs'})
})

router.post('/insert', async (req, res) => {
    const {name} = req.body

    const joboffer = {
        name
    }

    if(name && language){
        try {
            await jobOffer.create(joboffer)
            res.status(201).json({message: 'jobOffer inserido com sucesso!'})
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

})

router.post('/linkedin-scrapper', async (req, res) => {
    const {user, pass} = req.body

    if(user && pass){
        
        const status = await jobScrapper.runScrapper()
        res.status(201).json({message: 'Scrapper realizado com sucesso!'})
    }
})

router.get('/teste', async (req, res) => {
    let word = `Esta vaga foi obtida de um site de empregos. Saiba mais
    Talent&IT está com uma oportunidade de Programador C# para atuar na Sidim Sistemas. Empresa em parceria com empresa Sidim Sistemas contrata Programador C# JR .
    
    O Grupo Sidim é formado pela Sidim Sistemas, empresa especialista no desenvolvimento de softwares dedicados à gestão pública de municípios e pela MC Soluções em TI, qu atua com soluções tecnológicas acessíveis a ONGS e softwares de gestão comercial para empresas privadas.
    
    Desafios Do Cargo
    
    Receber chamados e analisar problemas das soluções internas de sistemas;
    
    Realizar suporte e manutenção de sistemas em C#/ASP.NET e JavaScript;
    
    Desenvolver novas funcionalidades no sistema;
    
    Realizar Investigação e correção de bugs;
    
    Requisitos
    
    Conhecimento e experiência em uma das linguagenn: .Net e / ou C#.
    
    Conhecimento e experiência com Banco de Dados SQL Server e MySQL Server.
    
    Formação: Formação superior será um diferencial, mas acima de tudo, iremos avaliar seus conhecimentos
    
    Tempo Integral Efetivo/CLT
    
    Salário: 3000,00 + benefícios`

    await jobScrapper.findFramework(word, 1)

})



module.exports = router
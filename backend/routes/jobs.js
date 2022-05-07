const express = require('express');
const jobOffer = require('../models/JobOfferModel');
const router = express.Router();
const jobScrapper = require('../scrapper/jobScrapper');

router.get('/', (req, res) => {
    jobOffer.aggregate([
        {$group: { _id: "$date", qtd: { $sum: 1 } }},
        {$sort: {_id: -1}}
    ]).limit(1).then((data)=> res.json(data))
})

router.get('/by-state', (req, res) => {
    jobOffer.aggregate([
        {$match: {state: {$nin: ["Brasil"]}}},
        {
            $group: {
                _id: {
                    date: "$date",
                    state: "$state"
                },
                qtd: {$count: {}}
            }
        },
        {$group: {_id: "$_id.state", qtd: {$push: "$qtd"}}},
        {$sort: {qtd: -1}}
    ])
    .limit(10)
    .then((data)=> res.json(data))
})

router.get('/by-level', (req, res) => {
    jobOffer.aggregate([
        {$match: {level: {$nin: ["N/A"]}}},
        {$project: { _id: 0, level: 1 } },
        {$unwind: "$level" },
        {$group: { _id: "$level", qtd: { $sum: 1 } }},
        {$project: { _id: 0,_id: "$_id", qtd: 1 } },
        {$sort: { qtd: -1 } }
      ]).then((data) => res.json(data))
})

router.get('/workplace', (req, res) => {
    jobOffer.aggregate([
        {$group: {_id: "$workPlace", qtd: {$sum: 1}}},
        {$sort: {qtd: -1}}
    ]).then((data)=> res.json(data))
})

router.get('/by-company', (req, res) => {
    jobOffer.aggregate([
        {$match: {company: {$nin: ["", "GeekHunter", "Confidencial", "ProgramaThor", "Caderno Nacional", "BNE - Banco Nacional de Empregos"]}}},
        {$group: {_id: "$company", qtd: {$sum: 1}}},
        {$sort: {qtd: -1}}
    ])
    .limit(10)
    .then((data)=> res.json(data))
})

router.get('/reset-state', (req, res) => {
    const wordFinder = require('../scrapper/utils/wordFinder')
    jobOffer.find({},{fullLocation: 1, jobId: 1, _id: 0})
    .then(data => data.map(el => ({
        jobId: el.jobId,
        state: wordFinder.findState(el.fullLocation)
    })))
    .then(async data => await data.forEach(async el => await jobOffer.updateOne({jobId: el.jobId}, {$set: {state: el.state}})))
    .then(data => res.json(data))
})

router.get('/reset-level', (req, res) => {
    const wordFinder = require('../scrapper/utils/wordFinder')
    jobOffer.find({},{title: 1, jobId: 1, _id: 0})
    .then(data => data.map(el => ({
        jobId: el.jobId,
        level: wordFinder.nivelConhecimento(el.title)
    })))
    .then(async data => await data.forEach(async el => await jobOffer.updateOne({jobId: el.jobId}, {$set: {level: el.level}})))
    .then(data => res.json(data))
})

router.post('/linkedin-scrapper', async (req, res) => {
    const {user, pass} = req.body

    if(user && pass){
        
        const status = await jobScrapper.runScrapper()
        res.status(201).json({message: 'Scrapper realizado com sucesso!'})
    }
})

router.get('/test', (req, res) => {
    const wordFinder = require('../scrapper/utils/wordFinder');
    let texto = `ATIVIDADES

    · Aplicar as soluções técnicas que permitirão maior agilidade no desenvolvimento do produto.
    
    · Garantir a aderência aos padrões de desenvolvimento, princípios, design de aplicações, frameworks e tecnologias utilizadas.
    
    · Garantir robustez, escalabilidade e reusabilidade dos serviços desenvolvidos. · Garantir a correta documentação dos serviços e publicação dessa documentação nas devidas ferramentas para conhecimento de todos.
    
    · Conhecimento nas ferramentas utilizadas nos ambientes para desenvolvimento nos canais, backend e integração entre as plataformas de alta e baixa;
    
    · Domínio das ferramentas para controle de versões e respectivos merge de branches ativas.
    
    · Experiência na construção de aplicações responsivas e adaptativas para execução nos diversos dispositivos.
    
    · Obrigatório conhecer e ter experiência no desenvolvimento de aplicações nas camadas Microfrontend, Back for Frontend e Backend.
    
    · Necessário conhecimento em desenvolvimento considerando filtros para aplicação de estratégia de rollout gradativo (filtro canário, release toggle, feature toggle, entre outros). · É indispensável conhecimento e experiência com desenvolvimento em Java, HTML, CCS, REACT, Store Procedures, Eclipse, Microserviços, Docker, JSF e CSS.
    
    · É necessário ter domínio da metodologia Agile para que a implementação e prazos sejam adequados à metodologia definida para o projeto.
    
    · Deve conhecer as ferramentas e linguagens abaixo, mas não limitados à estas:
    
    · Jira · Confluence · Bitbucket e Git · Bamboo · Node.js · Maven · Nexus · Eclipse · Waspat · Java 7 · Angular · HTML · CCS · REACT · JSF · Store Procedures · Microserviços · CWS, CTG · Express · Yaml · Bootstrap – front end · Springboot · Liberty – back-end · Starteam Desejável conhecimento, ou que o fornecedor garanta treinamento, coach e acompanhamento nas seguintes ferramentas: · AMB · ISD · Docker · Kubernetes · Chai e Mocha · WebSphere Application Server 8.5 (JVM, WebApplication, ResponseTime); · Dynatrace Suas entregas serão: § Códigos de aplicação em Java, Node.js, Angular, ou outra definida pelo cliente
    
    Testes Unitários com evidências
    
    Pacote para publicação, via esteira de integração contínua, nos ambientes de TU, TI, TH e Produção;
    
    Plano de Implantação
    
    Acompanhamento de mudanças (Implantações) no horário que se fizer necessário
    
    Correção de Bugs pré e pós implantação
    
    Massas de teste que exigirem programação, conforme plano de massas.
    
    Documentação da aplicação. Deverá acompanhar até a entrada em produção, logo poderão ser convidados a acompanhar as mudanças nos horários em que se fizer necessário. Todos os códigos só estarão concluídos quando devidamente registrados na ferramenta indicada pelo cliente.
    
    
    
    
    “At TATA Consultancy Services we promote an inclusive culture, we always work for equity. This translates into Gender, People with Disabilities, LGBTQIA +, Religion, Race, Diversity of experiences and Ethnicity, that is, all our opportunities are worked with those principles. Be a TCSer! ".`

    if(req.body.name.length > 0)
        texto = req.body.name

    res.json(wordFinder.findState(texto))
})


module.exports = router
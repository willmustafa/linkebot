import React, { useEffect, useState } from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Article from '../../../../components/UI/Articles/Article'

const Vagas = () => {
    const [vagas, setVagas] = useState(0)
    const [data, setData] = useState("Maio/2022")
    const [nivelConhecimento, setNivelConhecimento] = useState([
        {
            "qtd": 561,
            "_id": "Pleno"
        }])
    const [estado, setEstado] = useState([{_id: "São Paulo", qtd: 1}])
    const [workplace, setWorkplace] = useState([{_id: "Presencial", qtd: 1}])
    const [company, setCompany] = useState([{_id: "IBM", qtd: 1}])

    useEffect(() => {
        fetch('http://localhost:3030/jobs/').then(res => res.json())
        .then(data => {
            setVagas(data[0].qtd.toLocaleString('pt-BR'));
            setData((new Date(data[0]._id)).toLocaleString('pt-BR', {month: 'long', year: 'numeric'}))
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/jobs/by-level').then(res => res.json())
        .then(data => {
            setNivelConhecimento(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/jobs/by-state').then(res => res.json())
        .then(data => {
            setEstado(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/jobs/workplace').then(res => res.json())
        .then(data => {
            setWorkplace(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/jobs/by-company').then(res => res.json())
        .then(data => {
            setCompany(data);
        })
        .catch(error => console.error(error));
    }, []);
  return (
    <>
    <div className='d-flex'>
        <div className="col-2">
            <TitleJumbo>
                Como estão as vagas?
            </TitleJumbo>
        </div>
        <div className="col-2 d-flex">
            <SubtitleJumbo>
                <p>Foram coletadas {vagas} vagas disponíveis no Linkedin no mês de {data}.</p>
            </SubtitleJumbo>
        </div>
    </div>
    <div className='d-flex'>
        <div className="col-2">
            <Article data={nivelConhecimento} inPercentage={false}>
                A busca por profissional {nivelConhecimento[0]._id} está em alta!
            </Article>
            <Article data={workplace} inPercentage={false}>
                O trabalho {workplace[0]._id} ainda é uma preferência pelas empresas!
            </Article>
        </div>
        <div className="col-2 tilted-col">
            <Article data={estado} inPercentage={false}>
                {estado[0]._id} lidera as buscas por profissionais de TI!
            </Article>
            <Article data={company} inPercentage={false}>
                A {company[0]._id} é a empresa com mais vagas abertas!
            </Article>
        </div>
    </div>
    </>
  )
}

export default Vagas
import React, { useEffect, useState } from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Title from '../../../../components/UI/Title'
import MapChart from '../../../../components/UI/charts/MapChart'
import DoughnutChart from '../../../../components/UI/charts/DoughnutChart'
import BackgroundInfo from '../../../../components/UI/BackgroundInfo'
import HorizontalChart from '../../../../components/UI/charts/HorizontalChart'
import PolarAreaChart from '../../../../components/UI/charts/PolarAreaChart'

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
            <article>
                <BackgroundInfo>{nivelConhecimento[0].qtd}</BackgroundInfo>
                <Title>
                    A busca por profissional {nivelConhecimento[0]._id} está em alta!
                </Title>
                <p>São {nivelConhecimento[0].qtd} vagas para profissionais de nível {nivelConhecimento[0]._id}.</p>
                <HorizontalChart data={nivelConhecimento} />
            </article>
            <article>
                <BackgroundInfo>{workplace[0].qtd}</BackgroundInfo>
                <Title>
                    O trabalho {workplace[0]._id} ainda é uma preferência pelas empresas!
                </Title>
                <p>{workplace[0].qtd.toLocaleString('pt-BR')} das vagas é para a modalidade de trabalho {workplace[0]._id}.</p>
                <HorizontalChart data={workplace} />
            </article>
    
        </div>
        <div className="col-2 tilted-col">
            <article>
                <BackgroundInfo>{estado[0].qtd}</BackgroundInfo>
                <Title>
                    {estado[0]._id} lidera as buscas por profissionais de TI!
                </Title>
                <p>São {estado[0].qtd.toLocaleString('pt-BR')} vagas no estado.</p>
                <HorizontalChart data={estado} />
            </article>
            <article>
                <BackgroundInfo>{company[0].qtd}</BackgroundInfo>
                <Title>
                    A {company[0]._id} é a empresa com mais vagas abertas!
                </Title>
                <p>São {company[0].qtd} vagas somente nesta empresa</p>
                <HorizontalChart data={company} />
            </article>
        </div>
    </div>
    </>
  )
}

export default Vagas
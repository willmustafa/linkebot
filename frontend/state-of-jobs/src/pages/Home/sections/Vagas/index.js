import React from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Title from '../../../../components/UI/Title'
import MapChart from '../../../../components/UI/charts/MapChart'
import DoughnutChart from '../../../../components/UI/charts/DoughnutChart'
import BackgroundInfo from '../../../../components/UI/BackgroundInfo'
import HorizontalChart from '../../../../components/UI/charts/HorizontalChart'
import PolarAreaChart from '../../../../components/UI/charts/PolarAreaChart'

const Vagas = () => {
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
                <p>Foram coletadas 2.800 vagas disponíveis no Linkedin no mês de Maio/2022.</p>
            </SubtitleJumbo>
        </div>
    </div>
    <div className='d-flex'>
        <div className="col-2">
            <article>
                <BackgroundInfo>400</BackgroundInfo>
                <Title>
                    A busca por Sêniors está em alta!
                </Title>
                <p>São 400 empresas a procura de um profissional de nível Sênior.</p>
                <PolarAreaChart />
            </article>
            <article>
                <BackgroundInfo>30%</BackgroundInfo>
                <Title>
                    O trabalho remoto ainda é uma preferência pelas empresas!
                </Title>
                <p>30% das vagas é para a modalidade de trabalho remoto.</p>
                <HorizontalChart/>
            </article>
    
        </div>
        <div className="col-2 tilted-col">
            <article>
                <BackgroundInfo>120</BackgroundInfo>
                <Title>
                    São Paulo lidera as buscas por profissionais de TI!
                </Title>
                <p>São 120 vagas no estado.</p>
                <MapChart />
            </article>
            <article>
                <BackgroundInfo>6</BackgroundInfo>
                <Title>
                    A empresa BRP é a que mais está com vagas abertas!
                </Title>
                <p>São 6 vagas somente nesta empresa</p>
                <HorizontalChart/>
            </article>
        </div>
    </div>
    </>
  )
}

export default Vagas
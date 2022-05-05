import React from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Title from '../../../../components/UI/Title'
import MapChart from '../../../../components/UI/charts/MapChart'
import DoughnutChart from '../../../../components/UI/charts/DoughnutChart'
import BackgroundInfo from '../../../../components/UI/BackgroundInfo'
import HorizontalChart from '../../../../components/UI/charts/HorizontalChart'

const Linguagens = () => {
  return (
    <>
    <div className='d-flex'>
        <div className="col-2">
            <TitleJumbo>
                O que o mercado procura em um profissional?
            </TitleJumbo>
        </div>
        <div className="col-2 d-flex">
            <SubtitleJumbo>
                <p>Uma análise dos requisitos mínimos e preferidos pelas vagas.</p>
            </SubtitleJumbo>
        </div>
    </div>
    <div className='d-flex'>
        <div className="col-2">
            <article>
                <BackgroundInfo>400</BackgroundInfo>
                <Title>
                    Java lidera o número de vagas!
                </Title>
                <p>São 400 vagas para a linguagem Java.</p>
                <HorizontalChart/>
            </article>
            <article>
                <BackgroundInfo>30%</BackgroundInfo>
                <Title>
                    MySql continua sendo o banco de dados mais requisitado
                </Title>
                <p>30% das vagas é requer conhecimento em MySql.</p>
                <HorizontalChart/>
            </article>
    
        </div>
        <div className="col-2 tilted-col">
            <article>
                <BackgroundInfo>120</BackgroundInfo>
                <Title>
                    React é o frameworks para frontend mais buscado
                </Title>
                <p>120 vagas para programadores com conhecimento em React.</p>
                <MapChart />
            </article>
            <article>
                <BackgroundInfo>60</BackgroundInfo>
                <Title>
                    NodeJs é o framework para backend mais utilizado
                </Title>
                <p>São 60 vagas para desenvolvedores em NodeJs.</p>
                <HorizontalChart/>
            </article>
        </div>
    </div>
    </>
  )
}

export default Linguagens
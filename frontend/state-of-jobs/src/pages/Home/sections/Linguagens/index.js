import React, {useState, useEffect} from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Title from '../../../../components/UI/Title'
import MapChart from '../../../../components/UI/charts/MapChart'
import DoughnutChart from '../../../../components/UI/charts/DoughnutChart'
import BackgroundInfo from '../../../../components/UI/BackgroundInfo'
import HorizontalChart from '../../../../components/UI/charts/HorizontalChart'

const Linguagens = () => {
    const [framework, setFramework] = useState([{
        "qtd": 41,
        "_id": "SQL"
    }])
    const [databases, setDatabases] = useState([{
        "qtd": 41,
        "_id": "MySQL"
    }])

    const [cloudPlatform, setCloudPlatform] = useState([{
        "qtd": 41,
        "_id": "MySQL"
    }])

    const [otherFrameworks, setOtherFrameworks] = useState([{
        "qtd": 41,
        "_id": "MySQL"
    }])

    const [softSkills, setSoftSkills] = useState([{
        "qtd": 41,
        "_id": "MySQL"
    }])

    const [tools, setTools] = useState([{
        "qtd": 41,
        "_id": "MySQL"
    }])

    const [webFrameworks, setWebFrameworks] = useState([{
        "qtd": 41,
        "_id": "MySQL"
    }])

    useEffect(() => {
        fetch('http://localhost:3030/framework/programming-languages').then(res => res.json())
        .then(data => {
            setFramework(data.filter(el => !["C", "SQL", "R"].includes(el._id)));
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/framework/databases').then(res => res.json())
        .then(data => {
            setDatabases(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/framework/cloud-platform').then(res => res.json())
        .then(data => {
            setCloudPlatform(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/framework/other-frameworks').then(res => res.json())
        .then(data => {
            setOtherFrameworks(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/framework/soft-skills').then(res => res.json())
        .then(data => {
            setSoftSkills(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/framework/tools').then(res => res.json())
        .then(data => {
            setTools(data);
        })
        .catch(error => console.error(error));

        fetch('http://localhost:3030/framework/web-frameworks').then(res => res.json())
        .then(data => {
            setWebFrameworks(data);
        })
        .catch(error => console.error(error));
    }, []);

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
                <BackgroundInfo>{framework[0].qtd}</BackgroundInfo>
                <Title>
                    {framework[0]._id} lidera o número de vagas!
                </Title>
                <p>São {framework[0].qtd.toLocaleString("pt-BR")} vagas para a linguagem {framework[0]._id}.</p>
                <HorizontalChart data={framework} />
            </article>
            <article>
                <BackgroundInfo>{databases[0].qtd}</BackgroundInfo>
                <Title>
                    {databases[0]._id} continua sendo o banco de dados mais requisitado
                </Title>
                <p>{databases[0].qtd} das vagas requer conhecimento em {databases[0]._id}.</p>
                <HorizontalChart data={databases} />
            </article>
            <article>
                <BackgroundInfo>{webFrameworks[0].qtd}</BackgroundInfo>
                <Title>
                    {webFrameworks[0]._id} é o framework web mais solicitado
                </Title>
                <p>{webFrameworks[0].qtd} das vagas requer conhecimento em {webFrameworks[0]._id}.</p>
                <HorizontalChart data={webFrameworks} />
            </article>
            <article>
                <BackgroundInfo>{softSkills[0].qtd}</BackgroundInfo>
                <Title>
                    {softSkills[0]._id} é uma soft skill muito requisitada
                </Title>
                <p>{softSkills[0].qtd} vagas requerem conhecimento em {softSkills[0]._id}.</p>
                <HorizontalChart data={softSkills} />
            </article>
    
        </div>
        <div className="col-2 tilted-col">
            <article>
                <BackgroundInfo>{cloudPlatform[0].qtd}</BackgroundInfo>
                <Title>
                    {cloudPlatform[0]._id} é a plataforma cloud mais solicitada
                </Title>
                <p>{cloudPlatform[0].qtd} vagas para programadores com conhecimento em {cloudPlatform[0]._id}.</p>
                <HorizontalChart data={cloudPlatform} />
            </article>
            <article>
                <BackgroundInfo>{otherFrameworks[0].qtd}</BackgroundInfo>
                <Title>
                    {otherFrameworks[0]._id} é um framework muito requisitado
                </Title>
                <p>São {otherFrameworks[0].qtd} vagas solicitando conhecimento em {otherFrameworks[0]._id}.</p>
                <HorizontalChart data={otherFrameworks} />
            </article>
            <article>
                <BackgroundInfo>{tools[0].qtd}</BackgroundInfo>
                <Title>
                    {tools[0]._id} é uma das ferramentas mais pedidas
                </Title>
                <p>São {tools[0].qtd} vagas requerem conhecimento em {tools[0]._id}.</p>
                <HorizontalChart data={tools} />
            </article>
        </div>
    </div>
    </>
  )
}

export default Linguagens
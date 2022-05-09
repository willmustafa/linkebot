import React, {useState, useEffect} from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Article from '../../../../components/UI/Articles/Article'

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
            <Article data={framework} inPercentage={false}>
                {framework[0]._id} lidera o número de vagas!
            </Article>
            <Article data={databases} inPercentage={false}>
                {databases[0]._id} continua sendo o banco de dados mais requisitado
            </Article>
            <Article data={webFrameworks} inPercentage={false}>
                {webFrameworks[0]._id} é o framework web mais solicitado
            </Article>
            <Article data={softSkills} inPercentage={false}>
                {softSkills[0]._id} é uma soft skill muito requisitada
            </Article>
        </div>
        <div className="col-2 tilted-col">
            <Article data={cloudPlatform} inPercentage={false}>
                {cloudPlatform[0]._id} é a plataforma cloud mais solicitada
            </Article>
            <Article data={otherFrameworks} inPercentage={false}>
                {otherFrameworks[0]._id} é um framework muito requisitado
            </Article>
            <Article data={tools} inPercentage={false}>
                {tools[0]._id} é uma das ferramentas mais pedidas
            </Article>
        </div>
    </div>
    </>
  )
}

export default Linguagens
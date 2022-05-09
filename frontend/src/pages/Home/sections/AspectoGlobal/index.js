import React, { useEffect, useState } from 'react'
import SubtitleJumbo from '../../../../components/UI/SubtitleJumbo'
import TitleJumbo from '../../../../components/UI/TitleJumbo'
import Article from '../../../../components/UI/Articles/Article'

const AspectoGlobal = () => {
    const [totalSurvey, setTotalSurvey] = useState(100)
    const [languageHaveWorkedWith, setLanguageHaveWorkedWith] = useState([{
        qtd: 100,
        _id: "JavaScript"
    }])
    const [DatabaseHaveWorkedWith, setDatabaseHaveWorkedWith] = useState([{
        qtd: 100,
        _id: "MySql"
    }])
    const [PlatformHaveWorkedWith, setPlatformHaveWorkedWith] = useState([{
        qtd: 100,
        _id: "Cloud"
    }])
    const [WebframeHaveWorkedWith, setWebframeHaveWorkedWith] = useState([{
        qtd: 100,
        _id: "Cloud"
    }])
    const [MiscTechHaveWorkedWith, setMiscTechHaveWorkedWith] = useState([{
        qtd: 100,
        _id: "Cloud"
    }])
    const [ToolsTechHaveWorkedWith, setToolsTechHaveWorkedWith] = useState([{
        qtd: 100,
        _id: "Cloud"
    }])

    const headerOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    }

    const getPercentage = (value) => {
        return ((value/totalSurvey)*100).toFixed(0)
    }

    const mapPercentage = (array) => {
        return array.map(el => {
            return {
                qtd: getPercentage(el.qtd),
                _id: el._id
            }
        })
    }


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/survey/`).then(res => res.json())
        .then(data => {
            setTotalSurvey(data);
        })
        .catch(error => console.error(error));

        fetch(`${process.env.REACT_APP_API_URL}/survey/LanguageHaveWorkedWith`).then(res => res.json())
        .then(data => {
            setLanguageHaveWorkedWith(data);
        })
        .catch(error => console.error(error));

        fetch(`${process.env.REACT_APP_API_URL}/survey/DatabaseHaveWorkedWith`).then(res => res.json())
        .then(data => {
            setDatabaseHaveWorkedWith(data);
        })
        .catch(error => console.error(error));

        fetch(`${process.env.REACT_APP_API_URL}/survey/PlatformHaveWorkedWith`).then(res => res.json())
        .then(data => {
            setPlatformHaveWorkedWith(data);
        })
        .catch(error => console.error(error));

        fetch(`${process.env.REACT_APP_API_URL}/survey/WebframeHaveWorkedWith`).then(res => res.json())
        .then(data => {
            setWebframeHaveWorkedWith(data);
        })
        .catch(error => console.error(error));

        fetch(`${process.env.REACT_APP_API_URL}/survey/MiscTechHaveWorkedWith`).then(res => res.json())
        .then(data => {
            setMiscTechHaveWorkedWith(data);
        })
        .catch(error => console.error(error));

        fetch(`${process.env.REACT_APP_API_URL}/survey/ToolsTechHaveWorkedWith`).then(res => res.json())
        .then(data => {
            setToolsTechHaveWorkedWith(data);
        })
        .catch(error => console.error(error));
    }, [])


  return (
    <>
    <div className='d-flex'>
        <div className="col-2">
            <TitleJumbo>
                Qual a tendência mundial?
            </TitleJumbo>
        </div>
        <div className="col-2 d-flex">
            <SubtitleJumbo>
                <p>Uma análise da tendência mundial pelas linguagens de programação em relação as vagas ofertadas no mercado brasileiro.</p>
            </SubtitleJumbo>
        </div>
    </div>
    <div className='d-flex'>
        <div className="col-2">
            <Article data={languageHaveWorkedWith} inPercentage={true} totalSurvey={totalSurvey}>
                {languageHaveWorkedWith[0]._id} é a linguagem mais usada pelos programadores
            </Article>
            <Article data={DatabaseHaveWorkedWith} inPercentage={true} totalSurvey={totalSurvey}>
                {DatabaseHaveWorkedWith[0]._id} continua sendo o banco de dados mais utilizado
            </Article>
            <Article data={PlatformHaveWorkedWith} inPercentage={true} totalSurvey={totalSurvey}>
                {PlatformHaveWorkedWith[0]._id} é a plataforma cloud mais utilizada
            </Article>
        </div>
        <div className="col-2 tilted-col">
            <Article data={WebframeHaveWorkedWith} inPercentage={true} totalSurvey={totalSurvey}>
                {WebframeHaveWorkedWith[0]._id} é o Framework Web mais utilizada
            </Article>
            <Article data={MiscTechHaveWorkedWith} inPercentage={true} totalSurvey={totalSurvey}>
                {MiscTechHaveWorkedWith[0]._id} é o framework mais utilizado
            </Article>
            <Article data={ToolsTechHaveWorkedWith} inPercentage={true} totalSurvey={totalSurvey}>
                {ToolsTechHaveWorkedWith[0]._id} é a ferramenta mais utilizada
            </Article>
        </div>
    </div>
    </>
  )
}

export default AspectoGlobal
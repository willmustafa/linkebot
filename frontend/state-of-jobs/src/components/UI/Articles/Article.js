import React, { Children } from 'react'
import BackgroundInfo from '../BackgroundInfo'
import HorizontalChart from '../charts/HorizontalChart'
import Title from '../Title'

const Article = (props) => {
  const getPercentage = (value) => {
    return ((value/props.totalSurvey)*100).toFixed(0)
  }

  const mapPercentage = (array) => {
      return array.map(el => {
          return {
              qtd: getPercentage(el.qtd),
              _id: el._id
          }
      })
  }

  return (
    <article>
        <BackgroundInfo>{props.inPercentage ? getPercentage(props.data[0].qtd) : props.data[0].qtd}{props.inPercentage ? "%" : ""}</BackgroundInfo>
        <Title>
            {props.children}
        </Title>
        <p>São {props.inPercentage ? getPercentage(props.data[0].qtd) : props.data[0].qtd}{props.inPercentage ? "%" : ""} vagas para profissionais de nível {props.data[0]._id}.</p>
        <HorizontalChart data={props.inPercentage ? mapPercentage(props.data) : props.data} inPercentage={props.inPercentage} />
    </article>
  )
}

export default Article
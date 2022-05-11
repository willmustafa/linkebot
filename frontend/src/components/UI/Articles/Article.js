import React from "react"
import BackgroundInfo from "../BackgroundInfo"
import HorizontalChart from "../charts/HorizontalChart"
import Title from "../Title"
import PropTypes from "prop-types"

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
			<p>{props.description[0]} {props.inPercentage ? getPercentage(props.data[0].qtd) : props.data[0].qtd}{props.inPercentage ? "%" : ""} {props.description[1]} {props.data[0]._id} {props.description[2]}</p>
			<HorizontalChart data={props.inPercentage ? mapPercentage(props.data) : props.data} inPercentage={props.inPercentage} />
		</article>
	)
}

Article.propTypes = {
	totalSurvey: PropTypes.number,
	inPercentage: PropTypes.bool,
	children: PropTypes.node.isRequired,
	data: PropTypes.array,
	description: PropTypes.array
} 

export default Article
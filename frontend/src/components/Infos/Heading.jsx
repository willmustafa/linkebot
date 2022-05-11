import React, {useState, useEffect} from "react"
import Article from "../UI/Articles/Article"
import PropTypes from "prop-types"

const Heading = (props) => {
	const [data, setData] = useState([props.configStrings.default])

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/${props.configStrings.url}`).then(res => res.json())
			.then(res => setData(res))
			.catch(error => console.error(error))
	}, [])
    
	return (
		<Article data={data} inPercentage={props.inPercentage} description={props.configStrings.description} totalSurvey={props.totalSurvey}>
			{props.configStrings.heading[0]} {data[0]._id} {props.configStrings.heading[1]}
		</Article>
	)
}

Heading.propTypes = {
	totalSurvey: PropTypes.number,
	inPercentage: PropTypes.bool,
	configStrings: PropTypes.object
}

export default Heading
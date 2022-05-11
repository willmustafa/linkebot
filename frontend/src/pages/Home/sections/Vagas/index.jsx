import React, { useEffect, useState } from "react"
import SubtitleJumbo from "../../../../components/UI/SubtitleJumbo"
import TitleJumbo from "../../../../components/UI/TitleJumbo"
import Heading from "../../../../components/Infos/Heading"
import ConfigStrings from "../../../../strings/text-strings.json"

const Vagas = () => {
	const [vagas, setVagas] = useState(0)
	const [data, setData] = useState("Maio/2022")

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/jobs/`).then(res => res.json())
			.then(data => {
				setVagas(data[0].qtd.toLocaleString("pt-BR"))
				setData((new Date(data[0]._id)).toLocaleString("pt-BR", {month: "long", year: "numeric"}))
			})
			.catch(error => console.error(error))

	}, [])

	
	return (
		<>
			<div className='d-flex' name="vagas">
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
					<Heading configStrings={ConfigStrings["jobs-by-level"]}

						totalSurvey={400}

						inPercentage={false}
					/>

					<Heading configStrings={ConfigStrings["jobs-workplace"]}

						totalSurvey={400}

						inPercentage={false}
					/>
				</div>
				<div className="col-2 tilted-col">
					<Heading configStrings={ConfigStrings["jobs-by-state"]}
						totalSurvey={400}

						inPercentage={false}
					/>
					<Heading configStrings={ConfigStrings["jobs-by-company"]}
						totalSurvey={400}

						inPercentage={false}
					/>
				</div>
			</div>
		</>
	)
}

export default Vagas
import React, { useEffect, useState } from "react"
import SubtitleJumbo from "../../../../components/UI/SubtitleJumbo"
import TitleJumbo from "../../../../components/UI/TitleJumbo"
import Heading from "../../../../components/Infos/Heading"
import ConfigStrings from "../../../../strings/text-strings.json"

const AspectoGlobal = () => {
	const [totalSurvey, setTotalSurvey] = useState(100)
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/survey/`).then(res => res.json())
			.then(data => {
				setTotalSurvey(data)
			})
			.catch(error => console.error(error))
	}, [])
	return (
		<>
			<div className='d-flex' name="tendencia-mundial">
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
					<Heading configStrings={ConfigStrings["survey-LanguageHaveWorkedWith"]}
						totalSurvey={totalSurvey}

						inPercentage={true}
					/>
					<Heading configStrings={ConfigStrings["survey-DatabaseHaveWorkedWith"]}
						totalSurvey={totalSurvey}

						inPercentage={true}
					/>
					<Heading configStrings={ConfigStrings["survey-PlatformHaveWorkedWith"]}
						totalSurvey={totalSurvey}

						inPercentage={true}
					/>
				</div>
				<div className="col-2 tilted-col">
					<Heading configStrings={ConfigStrings["survey-WebframeHaveWorkedWith"]}
						totalSurvey={totalSurvey}

						inPercentage={true}
					/>
					<Heading configStrings={ConfigStrings["survey-MiscTechHaveWorkedWith"]}
						totalSurvey={totalSurvey}

						inPercentage={true}
					/>
					<Heading configStrings={ConfigStrings["survey-ToolsTechHaveWorkedWith"]}
						totalSurvey={totalSurvey}

						inPercentage={true}
					/>
				</div>
			</div>
		</>
	)
}

export default AspectoGlobal
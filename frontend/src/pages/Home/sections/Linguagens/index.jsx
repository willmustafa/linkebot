import React from "react"
import SubtitleJumbo from "../../../../components/UI/SubtitleJumbo"
import TitleJumbo from "../../../../components/UI/TitleJumbo"
import Heading from "../../../../components/Infos/Heading"
import ConfigStrings from "../../../../strings/text-strings.json"

const Linguagens = () => {

	return (
		<>
			<div className='d-flex' name="mercado">
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
					<Heading configStrings={ConfigStrings["framework-programming-languages"]}

						totalSurvey={400}

						inPercentage={false}
					/>
					<Heading configStrings={ConfigStrings["framework-databases"]}

						totalSurvey={400}

						inPercentage={false}
					/>
					<Heading configStrings={ConfigStrings["framework-web-frameworks"]}

						totalSurvey={400}

						inPercentage={false}
					/>
					<Heading configStrings={ConfigStrings["framework-soft-skills"]}

						totalSurvey={400}

						inPercentage={false}
					/>
				</div>
				<div className="col-2 tilted-col">
					<Heading configStrings={ConfigStrings["framework-cloud-platform"]}

						totalSurvey={400}

						inPercentage={false}
					/>
					<Heading configStrings={ConfigStrings["framework-other-frameworks"]}

						totalSurvey={400}

						inPercentage={false}
					/>
					<Heading 
						configStrings={ConfigStrings["framework-tools"]}

						totalSurvey={400}

						inPercentage={false}
					/>
				</div>
			</div>
		</>
	)
}

export default Linguagens
import React from "react"
import TitleJumbo from "../../../../components/UI/TitleJumbo"

const About = () => {
	return (
		<>
			<div name="sobre">
				<TitleJumbo>
            Sobre esse projeto
				</TitleJumbo>
				<p>Como iniciante em programação, uma das minhas principais dúvidas eram:</p>
				<ul>
					<li>Mas qual linguagem aprender primeiro?</li>
					<li>Qual o framework mais pedido?</li>
					<li>Eu aprendo MySql ou vou direto para o Postgres ou MongoDB?</li>
				</ul>
				<p>Normalmente procuramos aprender primeiro aquilo que o mercado está requisitando, afinal, precisamos de emprego.</p>
				<p>Assim, criei um web scrapper para encontrar qual a demanda do mercado!</p>
				<p>Mas por que parar por ai? Inspirado pelo <a href="https://2021.stateofjs.com/en-US/">State of Js</a> e a <a href="https://insights.stackoverflow.com/survey/2021">Pesquisa anual do Stack Overflow</a>, adicionei os dados das linguagens mais usadas no mundo, as mais amadas e odiadas, etc.</p>
				<p>Quer participar deste projeto? Acesse o repositório no <a href="https://github.com/willmustafa/linkebot">GitHub</a> e deixe sua ideia!</p>
				<p>Ou se quiser me contratar, estou em busca de emprego!</p>
			</div>
		</>
	)
}

export default About
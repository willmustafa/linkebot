import React from "react"
import { Content, Section } from "./HomeElements"
import About from "./sections/About"
import AspectoGlobal from "./sections/AspectoGlobal"
import Hero from "./sections/Hero"
import Linguagens from "./sections/Linguagens"
import Vagas from "./sections/Vagas"

const Home = () => {
	return (
		<Content>
			<Section className="hero" name="main-hero">
				<Hero />
			</Section>
			<Section>
				<About />
			</Section>
			<Section>
				<Vagas />
			</Section>
			<Section>
				<Linguagens />
			</Section>
			<Section>
				<AspectoGlobal />
			</Section>
		</Content>
	)
}

export default Home
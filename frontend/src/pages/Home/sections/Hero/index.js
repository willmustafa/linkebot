import React from 'react'
import { HeroWrapper, Title, Subtitle, ImgHero } from './HeroElements'
import Button from '../../../../components/UI/Button'

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Title>
          State of Jobs
        </Title>
        <Subtitle>
          Uma análise da situação do mercado de software no Brasil em relação aos frameworks e linguagens requisitadas pelas vagas de emprego.
        </Subtitle>
          <Button>
            Descobrir!
          </Button>
      </HeroWrapper>
      <ImgHero />
    </>
  )
}

export default Hero
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import image from './cryptocurrencies.png'
import Form from './components/Form'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`

function App() {
  const [coin, saveCoin] = useState('')
  const [cryptocurrency, saveCryptocurrency] = useState('')

  useEffect(() => {
    // Avoid execution at startup
    if (coin === '') return

    console.log('cotitiiti')
  }, [coin, cryptocurrency])

  return (
    <Container>
      <div>
        <Image src={image} alt="crypto image" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form saveCoin={saveCoin} saveCryptocurrency={saveCryptocurrency} />
      </div>
    </Container>
  )
}

export default App

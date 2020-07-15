import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const DivResult = styled.div`
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`

const Quotation = ({ result }) => {
  console.log(result)
  if (Object.keys(result).length === 0) return null
  return (
    <DivResult>
      <Price>
        Precio actual: <span>{result.PRICE}</span>
      </Price>
      <Info>
        Precio maximo del día: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Precio minimo del día: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24h: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{result.LASTUPDATE}</span>
      </Info>
    </DivResult>
  )
}

Quotation.propTypes = {
  saveCoin: PropTypes.object.isRequired,
}

export default Quotation

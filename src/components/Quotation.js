import React from 'react'

const Quotation = ({ result }) => {
  console.log(result)
  if (Object.keys(result).length === 0) return null
  return (
    <div>
      <p>
        Precio actual: <span>{result.PRICE}</span>
      </p>
      <p>
        Precio maximo del día: <span>{result.HIGHDAY}</span>
      </p>
      <p>
        Precio minimo del día: <span>{result.LOWDAY}</span>
      </p>
      <p>
        Variación últimas 24h: <span>{result.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Última actualización: <span>{result.LASTUPDATE}</span>
      </p>
    </div>
  )
}

export default Quotation

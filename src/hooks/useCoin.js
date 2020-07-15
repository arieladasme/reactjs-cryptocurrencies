import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

const LAbel = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`

const SelectOptions = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
`

const useCoin = (label, initialState, optionsCoins) => {
  // State of our custom hook
  const [state, updateState] = useState(initialState)

  const Select = () => (
    <Fragment>
      <LAbel>{label}</LAbel>
      <SelectOptions onChange={e => updateState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>
        {optionsCoins.map(option => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </SelectOptions>
    </Fragment>
  )

  // Return state, interfaz y modifying function
  return [state, Select, updateState]
}

export default useCoin

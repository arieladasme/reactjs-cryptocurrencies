import React, { Fragment, useState } from 'react'

const useCoin = (label, initialState, optionsCoins) => {
  // State of our custom hook
  const [state, updateState] = useState(initialState)

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select>
        <option value="">- Seleccione -</option>
        {optionsCoins.map(option => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  )

  // Return state, interfaz y modifying function
  return [state, Select, updateState]
}

export default useCoin

import React from 'react';
import { useState, useEffect } from "react";

const BeerContext = React.createContext({  });

export const BeerProvider = ({children}) => {
  const [ search, setSearch ] = useState()

  return(
    <BeerContext.Provider value={{search, setSearch}}>
      {children}
    </BeerContext.Provider>
  )
}

export default BeerContext;
import React from 'react';
import { useState, useEffect } from "react";

const BeerContext = React.createContext({  });

export const BeerProvider = ({children}) => {
  const [ search, setSearch ] = useState()
  const [ page, setPage ] = useState(1)

  return(
    <BeerContext.Provider value={{search, setSearch, page, setPage}}>
      {children}
    </BeerContext.Provider>
  )
}

export default BeerContext;
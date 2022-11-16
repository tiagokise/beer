import React from 'react';
import { useState, useEffect } from "react";

const BeerContext = React.createContext({  });

export const BeerProvider = ({children}) => {
  const [ search, setSearch ] = useState()
  const [ page, setPage ] = useState(1)
  const [beers, setBeers] = useState([]);

  return(
    <BeerContext.Provider value={{search, setSearch, page, setPage, beers, setBeers}}>
      {children}
    </BeerContext.Provider>
  )
}

export default BeerContext;
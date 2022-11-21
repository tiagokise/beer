import React, { useContext } from 'react';
import BeerContext from '../../store/beerContext';
import * as S from './Header.style';

export default function Header(){
  const { setSearch, setPage, setBeers } = useContext(BeerContext)
  
  return(
   <S.Header>
     <S.Container>
      <S.HeaderTitle>Beer's</S.HeaderTitle>
      <form>
        <label>Busca </label>
        <input type="search" onChange={({target: {value}}) => {setSearch(value); setPage(1)}} />
      </form>
     </S.Container>
   </S.Header>
  )
}
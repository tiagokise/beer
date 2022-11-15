import React, { useContext } from 'react';
import BeerContext from '../../store/beerContext';
import * as S from './Header.style';

export default function Header(){
  const { setSearch } = useContext(BeerContext)
  
  return(
   <S.Header>
     <S.Container>
      <S.HeaderTitle>Beer's</S.HeaderTitle>
      <form>
        <label>Busca </label>
        <input type="search" onChange={({target: {value}}) => setSearch(value)} />
      </form>
     </S.Container>
   </S.Header>
  )
}
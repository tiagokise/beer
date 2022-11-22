import React, { useContext, useState } from 'react';
import BeerContext from '../../store/beerContext';
import FavoriteList from '../FavoriteList/FavoriteList';
import * as S from './Header.style';

export default function Header(){
  const { setSearch, setPage, setBeers } = useContext(BeerContext)
  const [isOpen, setIsOpen] = useState(false)
  
  return(
   <S.Header>
     <S.Container>
      <S.HeaderTitle>Beer's</S.HeaderTitle>
      <form>
        <label>Busca </label>
        <input type="search" onChange={({target: {value}}) => {setSearch(value); setPage(1)}} />
      </form>
      <button onClick={()=> setIsOpen(!isOpen)}>favoritos</button>
     </S.Container>
    { !!isOpen && <FavoriteList isOpen={!!isOpen} setIsOpen={setIsOpen}/>}

   </S.Header>
  )
}
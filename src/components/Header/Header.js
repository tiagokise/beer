import React, { useContext, useState } from 'react';
import BeerContext from '../../store/beerContext';
import FavoriteList from '../FavoriteList/FavoriteList';
import * as S from './Header.style';
import iconLike from "../../images/like.svg";

export default function Header(){
  const { setSearch, setPage } = useContext(BeerContext)
  const [isOpen, setIsOpen] = useState(false)
  
  return(
   <S.Header>
     <S.Container>
      <S.HeaderTitle>Beer</S.HeaderTitle>
      <S.HeaderWrapper>
        <form>
          <label>Busca </label>
          <input type="search" onChange={({target: {value}}) => {setSearch(value); setPage(1)}} />
        </form>
        <S.Like onClick={()=> setIsOpen(!isOpen)} src={iconLike}/>

        {/* <S.FavoriteButton onClick={()=> setIsOpen(!isOpen)}>Favoritos</S.FavoriteButton> */}
      </S.HeaderWrapper>
     </S.Container>
    { !!isOpen && <FavoriteList isOpen={!!isOpen} setIsOpen={setIsOpen}/>}

   </S.Header>
  )
}
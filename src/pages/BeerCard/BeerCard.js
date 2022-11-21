import React, { useCallback } from 'react';
import { useState, useEffect } from "react";
import * as S from './BeerCard.style';
import iconLike from "../../images/like.svg";
import iconLike2 from "../../images/liked.svg";

export default function BeerCard({loading, beer, isOpen, setIsOpen, i, ...props}){
  const [cardInfo, setCardInfo] = useState([]);
  // const isLiked = localStorage.getItem(beer.id)
  const likedsListKeys = {...localStorage}
  let isLiked = Object.keys(likedsListKeys).some((liked) => liked == beer.id)
  const [liked, setLiked] = useState(isLiked === true ? isLiked : false)

  const handleLikedClick = useCallback((e) => {
    e.stopPropagation() 
    e.preventDefault()
    setLiked(!liked)
    localStorage.setItem(beer.id, !liked)
    if(liked) {
      localStorage.removeItem(beer.id)
    }
  },[liked, setLiked, localStorage, isLiked])
  // useEffect(() => {
  //   fetch(beer.url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCardInfo(data);
  //       setLoading(false);
  //     })
  //     .finally(() => setLoading(false))
  //   }, []);
  console.log(beer, isLiked)
  return(
    <S.BeerCard loading={loading} onClick={(e) => {e.stopPropagation() ;setIsOpen(beer)}}>
      <S.Like onClick={(e) => handleLikedClick(e)} liked={isLiked} src={isLiked ? iconLike2 : iconLike}/>
      <S.BeerImage src={beer.image_url} alt="Foto" className="avatar" />
      <S.Descriptions>
      <S.BeerName>{beer.name}</S.BeerName>
      {/* <S.Pairing>{beer.tagline}</S.Pairing>
      <S.Description>{beer.description}</S.Description>
      <S.Pairing><b>Harmonização de comida: </b>{beer.food_pairing}</S.Pairing> */}
      <S.Highlight><b>ABV: </b>{beer.abv}</S.Highlight>
      <S.Highlight><b>IBU: </b>{beer.ibu}</S.Highlight>
      <S.Highlight><b>Since </b>{beer.first_brewed}</S.Highlight>
      </S.Descriptions>
    </S.BeerCard>
  )
}
import React from 'react';
import { useState, useEffect } from "react";
import * as S from './BeerCard.style';

export default function BeerCard({beer, ...props}){
  const [cardInfo, setCardInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   fetch(beer.url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCardInfo(data);
  //       setLoading(false);
  //     })
  //     .finally(() => setLoading(false))
  //   }, []);

    
  return(
   <S.BeerCard>
     <S.BeerImage src={beer.image_url} alt="Avatar" className="avatar"/>
     <S.Descriptions>
     <S.BeerName>{beer.name}</S.BeerName>
     <S.Description>{beer.description}</S.Description>
     <S.Pairing><b>Food pairing: </b>{beer.food_pairing}</S.Pairing>
     <S.Highlight><b>abv: </b>{beer.abv}</S.Highlight>
     <S.Highlight><b>ibu: </b>{beer.ibu}</S.Highlight>
     </S.Descriptions>
     <S.Like/>
   </S.BeerCard>
  )
}
import { useState, useEffect, useContext } from "react";
import BeerContext from "../../store/beerContext";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"

export default function BeerList(){
  const [beers, setBeers] = useState([]);
  const [limit, setLimit] = useState(10)
  const [loading, setLoading] = useState(true);
  const {search} = useContext(BeerContext);
  let link = search ? `https://api.punkapi.com/v2/beers?beer_name=${search}` : `https://api.punkapi.com/v2/beers`;
  const totalCount = beers.length

  const seeMoreClick = () => {
    setLimit(limit + 10)
  } 
  const seeLessClick = () => {
    setLimit(10)
  }
  const likedsListKeys = {...localStorage}
  console.log(likedsListKeys)
  useEffect(async() => {
    await fetch(link)
    .then((response) => response.json())
    .then((data) => {
      setBeers(data);
      setLoading(false);
    })
    .finally(() => setLoading(false))
  }, [link]);

    console.log(totalCount, limit, beers)

return(
  <S.BeerList>
    { loading 
    ? "carregando"     
    : <>
        <S.BeerCards>
          {beers.map((beer) => <BeerCard beer={beer}/>).splice(0, limit)}
        </S.BeerCards>
        {totalCount < limit && <S.SeeMoreButton onClick={seeLessClick}>ver menos</S.SeeMoreButton>}
        {totalCount > limit && <S.SeeMoreButton onClick={seeMoreClick}>ver mais</S.SeeMoreButton>}
      </>
    }
  </S.BeerList>
  )
}
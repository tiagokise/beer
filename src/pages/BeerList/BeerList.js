import { useState, useEffect, useContext } from "react";
import BeerContext from "../../store/beerContext";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"

export default function BeerList(){
  const [beers, setBeers] = useState([]);
  const [limit, setLimit] = useState(20)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true);
  const {search} = useContext(BeerContext);
  let link = search ? `https://api.punkapi.com/v2/beers?beer_name=${search}` : `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`;
  const totalCount = beers?.length

  const nextPage = () => {
    setLoading(true)
    setPage(Number(page) + 1)
  } 
  const seeLessClick = () => {
    setLimit(10)
  }
  const likedsListKeys = {...localStorage}
  console.log(likedsListKeys)
  useEffect(() => {

    fetch(link)
    .then((response) => response.json())
    .then((data) => {
      setBeers(data);
    })
      setTimeout(() => {
        
        setLoading(false)
      }, 2000);
  }, [link]);

    console.log(totalCount, limit, beers, page)

return(
  <S.BeerList>
    <select name="beersPerPage" id="select">
        <option value="">Por página</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="80">80</option>
    </select>
    {<S.BeerListWrapper>
        <S.BeerCards >
          {beers?.map((beer) => <BeerCard beer={beer} loading={loading}/>).splice(0, limit)}
        </S.BeerCards>
        <S.SeeMoreButton onClick={nextPage}>Próxima página</S.SeeMoreButton>
      </S.BeerListWrapper>
    }
  </S.BeerList>
  )
}
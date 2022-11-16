import { useState, useEffect, useContext, useCallback, useMemo } from "react";
import BeerContext from "../../store/beerContext";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"


export default function BeerList(){
  const [beers, setBeers] = useState([]);
  const {page, setPage, search} = useContext(BeerContext)
  const [newPage, setNewPage] = useState(page)
  const [limit, setLimit] = useState(12)
  const [perPage, setPerPage] = useState({
    value: limit, 
    label: `${limit}`, 
    options: [
      { value: 12, label: '12' },
      { value: 25, label: '25' },
      { value: 50, label: '50' }
    ]
  })
  const [loading, setLoading] = useState(true);
  let link = search ? `https://api.punkapi.com/v2/beers?beer_name=${search}&page=${page}&per_page=${limit}` : `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`;
  
  const onChange = useCallback((e) => {setLimit(e.value); setPage(1)}, [setPerPage, limit]);
  const nextDisabled = useMemo(() => beers?.length / limit != 1,[beers, limit])
  const nextPage = () => {
    setLoading(true)
    setPage(Number(page) + 1)
  } 
  const lastPage = () => {
    setLoading(true)
    setPage(Number(page) - 1)
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

  // const options = [
  //   { value: 10, label: '10' },
  //   { value: 25, label: '25' },
  //   { value: 50, label: '50' }
  // ]
return (
  <S.BeerList>
    <S.BeerListWrapper>
      <label>Itens por página</label>
      <S.PerPageSelect {...perPage} value={perPage?.options?.filter(option => option.value === limit)} placeholder="Por página" onChange={onChange}/>
      <S.BeerCards >
        {beers?.map((beer) => <BeerCard beer={beer} loading={loading}/>).splice(0, limit)}
      </S.BeerCards>
      <S.ButtonsWrapper>
        <S.SeeMoreButton onClick={page <= 1 ? null : lastPage} disabled={page <=1}>Anterior</S.SeeMoreButton>
        <p>Página {page}</p>
        <S.SeeMoreButton onClick={!!nextDisabled ? null : nextPage} disabled={nextDisabled}>Próxima</S.SeeMoreButton>
      </S.ButtonsWrapper>
    </S.BeerListWrapper>
    </S.BeerList>
  )
}
import { useState, useEffect, useContext, useCallback, useMemo } from "react";
import BeerContext from "../../store/beerContext";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"


export default function BeerList(){
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [perPage, setPerPage] = useState({
    value: limit, 
    label: `${limit}`, 
    options: [
      { value: 10, label: '10' },
      { value: 25, label: '25' },
      { value: 50, label: '50' }
    ]
  })
  const [loading, setLoading] = useState(true);
  const {search} = useContext(BeerContext);
  let link = search ? `https://api.punkapi.com/v2/beers?beer_name=${search}` : `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`;
  const totalCount = beers?.length
  // const onPerPageChange = useCallback((e) => {
  //   const newValue = e
  //   console.log(newValue)
  //   setPerPage{}
  // }, [limit, setLimit, perPage, setPerPage])
  const onChange = useCallback((e) => setLimit(e.value), [setPerPage, limit]);
  const nextDisabled = useMemo(() => beers?.length / limit != 1,[beers, limit])
  console.log(nextDisabled, "beers", page, limit, beers.length / limit)
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
        <S.SeeMoreButton onClick={!!nextDisabled ? null : nextPage} disabled={nextDisabled}>Próxima</S.SeeMoreButton>
      </S.ButtonsWrapper>
    </S.BeerListWrapper>
    </S.BeerList>
  )
}
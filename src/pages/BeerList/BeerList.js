import { useState, useEffect, useContext, useCallback, useMemo } from "react";
import BeerContext from "../../store/beerContext";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"


export default function BeerList(){
  const [isOpen, setIsOpen] = useState(false)
  const {page, setPage, search, beers, setBeers, limit, setLimit} = useContext(BeerContext)
  const [newPage, setNewPage] = useState(page)
  const [perPage, setPerPage] = useState({
    value: limit, 
    label: `${limit}`, 
    options: [
      { value: 12, label: '12' },
      { value: 25, label: '25' },
      { value: 50, label: '50' },
      { value: 80, label: '80' },
    ]
  })
  const url = useMemo(() => 'https://api.punkapi.com/v2/beers?', [])
  const [loading, setLoading] = useState(true);
  let link = search ? `${url}beer_name=${search}${newPage !== 1 ? `&page=${page}` : ""}&per_page=${limit}` : `${url}${page !== 1 ? `&page=${page}` : ""}&per_page=${limit}`;
  console.log(link)
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
  console.log(isOpen)
  useEffect(() => {

    fetch(link)
    .then((response) => response.json())
    .then((data) => {
      setBeers(data);
        setLoading(false)
    })
      // setTimeout(() => {
        
      //   setLoading(false)
      // }, 2000);
  }, [link]);

return (
  <>
  <S.BeerList>
    <S.BeerListWrapper>
      <S.BeerListOptionsWrapper>
        <label>Itens por página</label>
        <S.PerPageSelect {...perPage} value={perPage?.options?.filter(option => option.value === limit)} placeholder="Por página" onChange={onChange} />
      </S.BeerListOptionsWrapper>
      <S.BeerCards >
        {beers?.map((beer, i) => <BeerCard beer={beer} i={i} loading={loading} isOpen={isOpen} setIsOpen={setIsOpen}/>).splice(0, limit)}
      </S.BeerCards>
      <S.ButtonsWrapper>
        <S.SeeMoreButton onClick={page <= 1 ? null : lastPage} disabled={page <=1}>Anterior</S.SeeMoreButton>
        <p>Página {page}</p>
        <S.SeeMoreButton onClick={!!nextDisabled ? null : nextPage} disabled={nextDisabled}>Próxima</S.SeeMoreButton>
      </S.ButtonsWrapper>
    </S.BeerListWrapper>
    </S.BeerList>
    {!!isOpen && <S.Modal isOpen={isOpen} setIsOpen={setIsOpen} onClick={() => setIsOpen(false)}>
      <div>
        <img src={isOpen?.image_url}></img>
        <p>{isOpen?.name}</p>
      </div>
    </S.Modal>}
  </>

  )
}
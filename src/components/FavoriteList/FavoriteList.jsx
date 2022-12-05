import React, { useEffect, useState } from 'react';
import * as S from './FavoriteList.style';

export default function FavoriteList({isOpen, setIsOpen}){
  const likedsListKeys = {...localStorage}
  const [favorites1, setFavorites1] = useState([])
  const [favorites2, setFavorites2] = useState([])
  const [favorites3, setFavorites3] = useState([])
  const [favorites4, setFavorites4] = useState([])
  const [favorites5, setFavorites5] = useState([])
  
  useEffect(() => {
    const onKeyup = (e) => { if (e.key === 'Escape') { setIsOpen && setIsOpen(false) } }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80&page=1')
    .then((response) => response.json())
    .then((data) => {
      setFavorites1(data);
    })
  }, []);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80&page=2')
    .then((response) => response.json())
    .then((data) => {
      setFavorites2(data);
    })
  }, []);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80&page=3')
    .then((response) => response.json())
    .then((data) => {
      setFavorites3(data);
    })
  }, []);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80&page=4')
    .then((response) => response.json())
    .then((data) => {
      setFavorites4(data);
    })
  }, []);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80&page=5')
    .then((response) => response.json())
    .then((data) => {
      setFavorites5(data);
    })
  }, []);
          
  const list = [...favorites1, ...favorites2, ...favorites3, ...favorites4, ...favorites5]
  const listed = list?.map((item, index) => {
    console.log(item.id.toString())
    if(Object.keys(likedsListKeys).includes(list[index].id.toString() )){
      return item
    }
    return null
  }).filter((item => item !== null))

  return(
    <S.Modal isOpen={!!isOpen} setIsOpen={setIsOpen} onClick={() => setIsOpen(false)}>
      <S.ModalWrapper>
        <S.FavoritesTitle>Favoritos</S.FavoritesTitle>
        <S.FavoriteList >
          {!!listed?.length && listed.map((item) => 

            <S.FavoriteListCard>
              <S.FavoriteImage src={item?.image_url}></S.FavoriteImage>
              <p>{item.name}</p>
            </S.FavoriteListCard>
          )}
        </S.FavoriteList>
      </S.ModalWrapper>
    </S.Modal>
  )
}


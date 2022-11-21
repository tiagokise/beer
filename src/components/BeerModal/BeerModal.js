import React, {useEffect} from 'react';
import * as S from './BeerModal.style';

export default function BeerModal({isOpen, setIsOpen}){

  useEffect(() => {
    const onKeyup = (e) => { if (e.key === 'Escape') { setIsOpen && setIsOpen(false) } }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);

  return(
    <S.Modal isOpen={!!isOpen} setIsOpen={setIsOpen} onClick={() => setIsOpen(false)}>
      <div>
        <img src={isOpen?.image_url}></img>
        <S.Descriptions>
        <S.BeerName>{isOpen.name}</S.BeerName>
        <S.Pairing>{isOpen.tagline}</S.Pairing>
        <S.Description>{isOpen.description}</S.Description>
        <S.Pairing><b>Harmonização de comida: </b>{isOpen.food_pairing}</S.Pairing>
        <S.Highlight><b>ABV: </b>{isOpen.abv}</S.Highlight>
        <S.Highlight><b>IBU: </b>{isOpen.ibu}</S.Highlight>
        <S.Highlight><b>Since </b>{isOpen.first_brewed}</S.Highlight>
        </S.Descriptions>      
      </div>
    </S.Modal>
  )
}
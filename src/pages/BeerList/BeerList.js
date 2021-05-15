import { useState, useEffect } from "react";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"

export default function BeerList(){
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setLoading(false);
      })
      .finally(() => setLoading(false))
    }, []);

    console.log(beers)

return(
  <>
    { loading 
    ? "carregando"     
    : <S.BeerCards>
      {beers.map((beer) => <BeerCard beer={beer}/>)}
      </S.BeerCards>
    }
  </>
  )
}
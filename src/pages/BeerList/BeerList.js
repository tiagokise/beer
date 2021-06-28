import { useState, useEffect, useContext } from "react";
import BeerContext from "../../store/beerContext";
import BeerCard from "../BeerCard";
import * as S from "./BeerList.style"

export default function BeerList(){
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {search} = useContext(BeerContext);
  let link = search ? `https://api.punkapi.com/v2/beers?beer_name=${search}` : `https://api.punkapi.com/v2/beers`;

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setLoading(false);
      })
      .finally(() => setLoading(false))
    }, [link]);

    console.log(search)

return(
  <>
    { loading 
    ? "carregando"     
    : <S.BeerCards>
      {beers
        .map((beer) => <BeerCard beer={beer}/>)}
      </S.BeerCards>
    }
  </>
  )
}
import React, { useEffect, useState } from 'react';
import * as S from './FavoriteList.style';

export default function FavoriteList({isOpen, setIsOpen}){
  const likedsListKeys = {...localStorage}

  const [favorites1, setFavorites1] = useState([])
  const [favorites2, setFavorites2] = useState([])
  const [favorites3, setFavorites3] = useState([])
  const [favorites4, setFavorites4] = useState([])
  const [favorites5, setFavorites5] = useState([])
  const [favorites6, setFavorites6] = useState([])
  const [favorites7, setFavorites7] = useState([])
  const [favorites8, setFavorites8] = useState([])
  console.log(likedsListKeys)
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
      // setTimeout(() => {
        
      //   setLoading(false)
      // }, 2000);
  }, []);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80&page=2')
    .then((response) => response.json())
    .then((data) => {
      setFavorites2(data);
    })
        // setTimeout(() => {
          
        //   setLoading(false)
        // }, 2000);
    }, []);
    useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers?per_page=80&page=3')
      .then((response) => response.json())
      .then((data) => {
        setFavorites3(data);
      })
          // setTimeout(() => {
            
          //   setLoading(false)
          // }, 2000);
      }, []);
      useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?per_page=80&page=4')
        .then((response) => response.json())
        .then((data) => {
          setFavorites4(data);
        })
            // setTimeout(() => {
              
            //   setLoading(false)
            // }, 2000);
        }, []);
        useEffect(() => {
          fetch('https://api.punkapi.com/v2/beers?per_page=80&page=5')
          .then((response) => response.json())
          .then((data) => {
            setFavorites5(data);
          })
              // setTimeout(() => {
                
              //   setLoading(false)
              // }, 2000);
          }, []);
          useEffect(() => {
            fetch('https://api.punkapi.com/v2/beers?per_page=80&page=6')
            .then((response) => response.json())
            .then((data) => {
              setFavorites6(data);
            })
                // setTimeout(() => {
                  
                //   setLoading(false)
                // }, 2000);
            }, []);
            useEffect(() => {
              fetch('https://api.punkapi.com/v2/beers?per_page=80&page=7')
              .then((response) => response.json())
              .then((data) => {
                setFavorites7(data);
              })
                  // setTimeout(() => {
                    
                  //   setLoading(false)
                  // }, 2000);
              }, []);
              useEffect(() => {
                fetch('https://api.punkapi.com/v2/beers?per_page=80&page=8')
                .then((response) => response.json())
                .then((data) => {
                  setFavorites8(data);
                })
                    // setTimeout(() => {
                      
                    //   setLoading(false)
                    // }, 2000);
                }, []);
                const list = [...favorites1, ...favorites2, ...favorites3, ...favorites4, ...favorites5, ...favorites6, ...favorites7, ...favorites8]
                const listed = list?.map((item, index) => {
                  console.log(item.id.toString())
                  if(Object.keys(likedsListKeys).includes(list[index].id.toString() )){
                    return item
                  }
                  return null
                }).filter((item => item !== null))
  console.log(listed)
  return(
    <S.Modal isOpen={!!isOpen} setIsOpen={setIsOpen} onClick={() => setIsOpen(false)}>
      <S.FavoriteList >
        {!!listed?.length && listed.map((item) => 
          <div>
            <p>{item.name}</p>
          </div>
        )}
      </S.FavoriteList>
    </S.Modal>
  )
}


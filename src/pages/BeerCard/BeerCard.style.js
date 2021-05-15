import styled from 'styled-components';

export const BeerCard = styled.div`
  position: relative;
  /* width: 40%; */
  height: 200px;
  display: grid;
  grid-template-areas: 'beerImage descriptions';
  grid-template-columns: 100px 1fr;
  grid-gap: 16px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 24px;
  border-radius: 0px 15px 15px 0px;
  background-color: white;
  border-left: 10px solid orange;
  flex: 1 1 350px;

`;

export const BeerImage = styled.img`
  grid-area: beerImage; 
  width: auto;
  height: inherit;
  object-fit: inherit;
  margin: 0 auto;
`
export const BeerName = styled.div`
  font-weight: bold;
  position: relative;
  ::before{
    content: "<";
    position: absolute;
    left: -20px;
    top: -8px;
    font-size: 30px;
    line-height: 1;
    color: orange;
  }
`
export const Descriptions = styled.div`
  grid-area: descriptions;

`

export const Description = styled.p`
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 5; 
  -webkit-box-orient: vertical; 
  font-size: 10px;
  min-height: 60px;  
`
export const Pairing = styled.p`
  overflow: hidden; 
  position: relative;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  font-size: 10px;
`
export const Highlight = styled.div`
  font-size: 10px;
`

export const Like = styled.div`
  background-image: url($likeIcon)

`
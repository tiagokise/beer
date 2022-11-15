import styled from 'styled-components';
import bgBeer from '../../images/cerveja-sustentabilidade.jpg'

export const BeerCards = styled.div`
  
  display: flex;
  flex-flow: wrap;
  gap: 16px;
  justify-content: center;
  flex-shrink: 2;
  background-color: white;
  /* width: 80%; */
  margin: 0 auto;

` 

export const BeerList = styled.div`
  background-image: url(${bgBeer});
  background-size: 100% auto;
  background-color: #f2c624;
  background-repeat: no-repeat;
  padding: 50px 30px;
  
`
export const SeeMoreButton = styled.div`
  border-radius: 16px;
  background-color: white;
  border: 1px solid lightblue;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
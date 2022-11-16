import styled from 'styled-components';
import bgBeer from '../../images/cerveja-sustentabilidade.jpg'
import Select from 'react-select'

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
  background-color: #f2c624;
  background-repeat: no-repeat;
  padding: 50px 30px;
  
`
export const PerPageSelect = styled(Select)`
  width: 150px;
  margin: 8px 0;
`
export const BeerListWrapper = styled.div`
  background-color: #FFFFFF98;
  padding: 20px;
  border-radius: 12px;
`
export const SeeMoreButton = styled.div`
  border-radius: 16px;
  background-color: #f2c624;
  cursor: pointer;
  border: 1px solid lightblue;
  width: 160px;
  height: 30px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
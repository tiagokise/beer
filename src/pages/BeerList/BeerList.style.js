import styled, {css} from 'styled-components';
import bgBeer from '../../images/cerveja-sustentabilidade.jpg'
import Select from 'react-select'

export const BeerCards = styled.div`

  display: flex;
  flex-flow: wrap;
  gap: 16px;
  justify-content: center;
  flex-shrink: 2;
  /* background-color: white; */
  /* width: 80%; */
  margin: 0 auto;

` 
export const BeerListOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: end;
  label{
    font-size: 14px;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
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
  ${({disabled}) => css`
    border-radius: 16px;
    background-color: ${disabled ? '#99999930' : '#FFFFFF'};
    color: ${disabled ? '#555555' : '#000000'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border: 2px solid ${disabled ? 'lightblue' : "#003F87"};
    width: 160px;
    height: 30px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    ${!disabled && css`
      :hover{
        background-color: #003F87;
        color: #FFFFFF;
      }
    `}
  `}

`


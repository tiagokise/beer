import styled, {css} from 'styled-components';
import iconLike from "../../images/like.svg";
import iconLike2 from "../../images/liked.svg";

export const Header = styled.div`
  max-width: 100vw;
  background-color: orange;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: column;
  form{
    label{
      font-weight: bold;
      font-size: 14px;
      margin-right: 8px;
    }
    input{
      font-size: 16px;
      padding: 5px;
      width: 200px;
      /* height: 24px; */
      border-radius: 8px;
      border: 2px solid #003F87;

    }
  }

`
export const HeaderTitle = styled.h1`
  font-size: 3em;
  color: #003F87;
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`

export const Like = styled.img`
  background-image: url(${iconLike});
  width: 34px;
  height: 34px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index:2;
  :hover{
  background-image: url(${iconLike2});

  }
`
export const FavoriteButton = styled.span`
  ${({disabled}) => css`
    border-radius: 16px;
    background-color: ${disabled ? '#99999930' : '#FFFFFF'};
    color: ${disabled ? '#555555' : '#000000'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border: 2px solid ${disabled ? 'lightblue' : "#003F87"};
    width: 160px;
    height: 34px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;

    ${!disabled && css`
      :hover{
        background-color: #003F87;
        color: #FFFFFF;
      }
    `}
  `}
  @media (min-width: 420px){
    margin: 0;
  }
`
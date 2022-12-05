import styled from 'styled-components';

export const FavoriteList = styled.div`
  /* position: fixed; */
  /* top: 0px;
  left: 0px;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 100; */
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  background-color: transparent;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px white;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 10px;
  }
`;
export const ModalWrapper = styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
`
export const FavoriteListCard = styled.div`
  padding: 8px;
  background-color: #FFFFFF;

  border-radius: 8px;
  box-shadow: 1px 1px .5px #44444460;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
  height: 180px;
  text-align: center; 
  border: 1px solid orange;

  :hover{
    border: 1px solid red;
  }
`
export const FavoritesTitle = styled.h1`
  position: relative;
  color: #FFFFFF;
  @media (min-width: 1024px){
    font-size: 52px; 
  }
  ::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: orange;
    right: 110%;
    top: 50%;
  }
  ::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: orange;
    left: 110%;
    top: 50%;
  }
`
export const FavoriteImage = styled.img`
  height: 80px;
  object-fit: contain;
`
export const Modal = styled.div`
  top: 0px;
  left: 0px;
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
 
`
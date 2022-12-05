import styled from 'styled-components';

export const FavoriteList = styled.div`
  /* position: fixed; */
  /* top: 0px;
  left: 0px;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 100; */
  flex-direction: row;
  flex-flow: wrap;
  max-height: 80%;
  background-color: transparent;
 /* width */
 ::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: 10px;
}
`;
export const FavoriteListCard = styled.div`
  padding: 8px;
  background-color: #FFFFFF;

  border-radius: 8px;
  box-shadow: 1px 1px .5px #44444460;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 180px;
  text-align: center; 
  border: 1px solid orange;

  :hover{
    border: 1px solid red;
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
  >div{
    padding: 20px;
    margin: 20px;
    position: relative;
    border-radius: 12px;
    /* background: white; */
    width: 70%;

    /* max-height: 85%; */
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
   
  }
 
`
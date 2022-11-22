import styled from 'styled-components';

export const FavoriteList = styled.div`
  /* position: fixed; */
  /* top: 0px;
  left: 0px;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 100; */
`;
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
    background: white;
    width: 70%;
    max-height: 85%;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
   
    
    p{
      margin: 0px;
      line-height: 1.6;
    }
  }
`
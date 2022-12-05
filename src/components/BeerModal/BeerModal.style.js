import styled, {css} from 'styled-components';

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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    >img{
      max-width: 150px;
        max-height: 150px;
    }
    @media (min-width: 786px){
      flex-direction: row;
      >img{
        max-width: 150px;
        max-height: 150px;
      }
    }
  }
`
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const BeerName = styled.div`
  font-weight: bold;
  position: relative;
  font-size: 16px;
  margin-bottom: 8px;
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
  line-height: 1.3;

  /* ::before{
    content: "<";
    position: absolute;
    left: -30px;
    top: -8px;
    font-size: 30px;
    line-height: 1;
    color: orange;
  } */
`
export const Descriptions = styled.div`
  grid-area: descriptions;

`

export const Description = styled.p`
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  font-size: 10px;
  /* min-height: 60px;   */
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
export const Like = styled.img`
  ${(icon) => css`background-image: url(${icon})`}
  width: 25px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index:2;
`

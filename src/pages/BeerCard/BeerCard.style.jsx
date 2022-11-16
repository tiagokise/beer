import styled, {css} from 'styled-components';



export const BeerCard = styled.div`
  position: relative;
  /* width: 40%; */
  max-width: 350px;
  height: 200px;
  display: grid;
  grid-template-areas: 'beerImage descriptions';
  grid-template-columns: 130px 1fr;
  grid-gap: 16px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 24px;
  border-radius: 0px 15px 15px 0px;
  background-color: white;
  border-left: 10px solid orange;
  flex: 1 1 350px;
  ${({loading}) => css`
    ::after{
      display: ${loading ? 'block' : 'none'};
      content: "";
      background: linear-gradient(-45deg, #FF9, #fff, #eee, #ff3);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 0px 15px 15px 0px;
      z-index: 1;
    }
  `}
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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
    left: -30px;
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
  ${(icon) =>  `background-image: url(${icon})`}
  width: 25px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`
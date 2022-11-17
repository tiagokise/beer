import styled from 'styled-components';

export const Header = styled.div`
  max-width: 100vw;
  background-color: orange;

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
      border-radius: 2px;
      border: 2px solid #555555;

    }
  }

`
export const HeaderTitle = styled.h1`
  font-size: 2.5em;
`
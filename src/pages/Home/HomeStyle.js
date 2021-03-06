import styled from 'styled-components'

export const Tab = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 5px;

  @media (max-width: 570px) {
    width: 320px;
  }

  @media (min-width: 570px) and (max-width: 750px) {
    width: 550px;
  } 

  @media (min-width: 750px) {
    width: 710px;
  }
`

export const Button = styled.button`
  color: #ea5561;
  font-size: 20px;
  margin: 10px;
  padding: 5px;
  width: 300px;
  border: 2px solid #ea5561;
  border-radius: 3px;
`
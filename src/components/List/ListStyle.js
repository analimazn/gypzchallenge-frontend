import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 5px;
  margin: 10px 0 10px 0;
  border-radius: 3px;
  align-self: center;
  border: 2px solid #c9cffa;
  
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
  width: 320px;
  height: 35px;
  background: #3a83a5;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  align-self: center;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

export const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
`

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`

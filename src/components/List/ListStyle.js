import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`

export const Card = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: column; 
  align-self: center;
  padding: 10px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  border: 2px solid #c9cffa;
  text-align: justify;
  
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
  margin: 0 0 10px 0;
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
  text-transform: capitalize;
`

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  text-indent: 10px;
  text-transform: capitalize;
  color: ${props => props.color || '#4d4d4d'}
`

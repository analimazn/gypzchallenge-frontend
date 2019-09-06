import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: column; 
  align-self: center;
  padding: 10px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  border: 2px solid #c9cffa;
  text-align: inherit;
  
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

export const Text = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 1.08em;
  font-weight: 300;
  text-indent: 10px;
  text-transform: uppercase;
  color: ${props => props.color || '#4d4d4d'}
`
  
export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  text-indent: 10px;
  text-transform: uppercase;
  color: ${props => props.color || '#4d4d4d'}
`

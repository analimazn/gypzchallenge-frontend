import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 800px;
  margin: 0 0 20px 0;
  padding: 10px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius: 5px;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 2px solid #c9cffa;
  border-radius: 3px;

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
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
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

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`

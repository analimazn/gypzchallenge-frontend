import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`
export const Alert = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: column; 
  align-self: center;
  padding: 10px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  border: 2px solid #c9cffa;
  text-align: center;
  
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
  
  @media (max-width: 570px) {
    width: 330px;
  }

  @media (min-width: 570px) and (max-width: 750px) {
    width: 560px;
  } 

  @media (min-width: 750px) {
    width: 720px;
  }
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 2px solid #c9cffa;
  border-radius: 3px;

  @media (max-width: 570px) {
    width: 300px;
  }

  @media (min-width: 570px) and (max-width: 750px) {
    width: 520px;
  } 

  @media (min-width: 750px) {
    width: 690px;
  }
`

export const Button = styled.button`
  width: 200px;
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

export const Title3 = styled.h3`
  font-family: 'Raleway', sans-serif;
  color: #4d4d4d;
  align-self: start;
  margin: 10px 0 10px 10px;
`

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 5px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  padding: 5px;
  margin: 5px;
  border: 2px solid #c9cffa;
  border-radius: 3px;
`

export const Button = styled.button`
  width: 300px;
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

export const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
`

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`

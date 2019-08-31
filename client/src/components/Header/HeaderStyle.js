import styled from 'styled-components'

export const ColorHeader = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: space-around;
`
  
export const Container = styled.div`
  display: flex;
  align-self: start;
  width: 95%;
  border-bottom: 2px solid #c9cffa;
  margin: 20px;
  padding: 5px;

  h1 {
    margin: 10px 10px 0;
    @import url('https://fonts.googleapis.com/css?family=Amiri|Lora|Muli&display=swap');  
    font-family: 'Amiri', serif;
    font-family: 'Muli', sans-serif;
    font-family: 'Lora', serif;
    font-size: 35px;
    color: #0d1442;
  }
`
  
export const Logo = styled.div`
  img {
    height: 120px;
    padding: 10px;
    border-radius: 10%;
    margin-right: 5px;
  }
`
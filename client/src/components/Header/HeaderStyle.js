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
  border-bottom: 3px solid #081235;
  margin: 20px;

  h1 {
    margin: 10px 10px 0;
    @import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');
    font-family: 'Amiri', serif;
    color:  #ea5561 ;
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
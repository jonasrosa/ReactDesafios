import styled from "styled-components";

export const Hedear= styled.header`
    grid-column: 1/4;
    grid-row: 1/2;
    background:#1DB954 ;
    
 `

export const BoxText = styled.div`
    width: 70%;
    height: 70px;
    position: absolute;
    top: 15px;
    margin-left:335px;
  
`
export const Title = styled.h1`
    font-size:20px;
    font-style: normal;
    font-weight:700;
    font-family: 'Roboto',serif;
    color: #fafafa;
`
export const BoxSeach = styled.div`
    border-radius: 20px;
    width: 337px;
    height: 28px;
    display: flex;
    background: #FFFFFF;
    margin-top: 12px;
`
export const InputSearch = styled.input`
    outline: none;
    border-style: none;
    width: 100%;
    margin: 5px;

    inputSearch::placeholder{
    color:#A4A4A4 ;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    }

`
export const Main = styled.main`
  grid-column: 1/4;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: baseline;
    background: #FFFFFF;

`

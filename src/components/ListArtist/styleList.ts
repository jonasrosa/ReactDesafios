 import styled from 'styled-components'

 export const BoxList=styled.ul` 
    width: 750px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:flex-start;
    list-style:none;
 `
 export const List= styled.li`
   display: flex;
    margin-top: 10px;
    margin-left: 20px;
 `
  export const CarLabelNameArtist=styled.div`
   width: 162px;
    height: 50px;
    background: #EFEFEF;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 0px 8px 8px 0px;
  
`
 export const LabelNameArtist=styled.p`
    font-size:12px;
    font-style: normal;
    font-weight:500;
    font-family: 'Roboto', sans-serif;
    color: #0F4321;
    margin-left: 25px;
    
 `

 export const ErrorMessage= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
 `
 export const LegendErrorMessage= styled.h3`
    font-size:14px;
    font-style: normal;
    font-weight:500;
    font-family: 'Roboto', sans-serif;
    color: #A4A4A4;
 `
  export const LabelErrorMessage= styled.p`
    font-size:12px;
    font-style: normal;
    font-weight:400;
    font-family: 'Roboto', sans-serif;
    color: #A4A4A4;
    margin-top: 10px;
 
`
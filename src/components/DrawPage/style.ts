import styled from "styled-components"


export const CanvasContainer = styled.div`
    position:relative;
    height:100vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: column;
    width:100%;
    text-align:center;
    background-color: #FFC553;
`
export const CanvasStyle = styled.div`
    canvas {
        display:inline;
        justify-content:center;
        align-items:center;
        text-align:center;
        background-color:white;
    }
   
`

export const Button = styled.div`
width:2.5rem;
background-color:white;
text-align: center;
cursor: pointer;
border: 1px solid black;
`

export const ToolBarStyle = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`

export const ColorPickStyle = styled.div`
    input{
        width:3rem;
        height:3rem;
    }
`

export const UploadStyle = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
`
export const ThemeStyle = styled.div`
    display:flex;
    padding:2rem;
    text-align:center;
    align-items:center;
    justify-content:center;
    font-size: 2rem;
`
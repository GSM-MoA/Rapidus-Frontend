import styled from "styled-components"

export const DropNav = styled.div`
    position:relative;
    height: 0px;
    display:flex;
    border:1px solid white;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    color:black;
    z-index:2;
    a{
        width: 135px;
        background-color: #ffd35c;
        padding: 5px 0px;
        &:hover{
            color:white;
            background-color: #ffb805;
        }
    }
`


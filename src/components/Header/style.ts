import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 6rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`

export const RapidusLogo = styled.div`
    height: 0px;
    display:flex;
    padding: 0px 5vw;
    justify-content: start;
`

export const Categories = styled.ul`
    list-style: none;
    display: flex;
    height: 70px;
    font-size: 1.7rem;
    align-items: flex-end;
    justify-content: space-between;
    li{
        text-align:center;
        padding: 0px 2vw;
        &:hover{
            color:white;
        }
    }
    a{
        
    }
    .choice{
        color:white
    }

`
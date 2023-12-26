import { IsHome } from '@/types/components/HeaderProps';
import styled from 'styled-components';

export const HeaderContainer = styled.header<IsHome>`
    position: relative;
    top: 0;
    width: 100vw;
    height: 15vh;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    background-color: ${(props) => (props.$isHome ? "none" :  "white")};
`

export const RapidusLogo = styled.div<IsHome>`
  position: relative;
  display: flex;
  padding: 0px 5vw;
  justify-content: center;
  align-items:center;
   path{
     stroke:${(props) => (props.$isHome ? "#917AA8" :  "#5BF99A")};
   }
`;

export const RapidusText = styled.div<IsHome>`
    position: absolute;
    display: flex;
    path{
         fill:${(props) => (props.$isHome ? "#white" :  "black")};
    }
`

export const Categories = styled.ul<IsHome>`
    list-style: none;
    display: flex;
    font-size: 2rem;
    align-items: flex-end;
    justify-content: space-between;
   
    li {
        text-align: center;
        padding: 0px 2vw;

        &:hover {
            color: ${(props) => (props.$isHome ? "white" :  "#0BC3FD")};
        }
        .choice {
            color: ${(props) => (props.$isHome ? "white" :  "#0BC3FD")};
        }
    }
`
import { IsHome } from "@/types/components/HeaderProps";
import styled from "styled-components"

const DropNav = styled.div<IsHome>`
    position:relative;
    height: 0rem;
    display:flex;
    border:1px solid ${(props) => (props.$isHome ?  'white' : '#0BC3FD')};
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    color: black;
    z-index:2;

    a {
        width: 10rem;
        background-color: ${(props) => (props.$isHome ? "#ffd35c" :  "#ebf4f5")};
        padding: 0.3rem 0rem;

        &:hover {
            color: ${(props) => (props.$isHome ? "white" : "#0BC3FD")};
            background-color: ${(props) => (props.$isHome ? "#ffb805" : "#ebfeff")};
        }
    }
`;

export default DropNav
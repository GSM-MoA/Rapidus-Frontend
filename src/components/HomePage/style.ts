import styled from "styled-components";

export const HomePageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction:column;
    color:white;
    width: 100vw;
    text-align: center;
    justify-content: center;
`

export const HomePageMainText = styled.div`
    p{
        font-weight:bold;
        font-size: 3.5rem;
        margin:0px;
    }
`

export const HomePageSubText = styled.div`
    display:flex;
    margin: 1rem;
    flex-direction: column;
    color:black;
    p{
        
        font-size: 1.8rem;
        margin:0px;
    }
`

export const HomePageRankText = styled.div`
    font-size: 1.8rem;
`
export const TextContainer = styled.div`
    display:relateive;
    display:flex;
    flex-direction:column;
    justify-content: center;
`

export const HomePageCanvas = styled.div`

    position: relative;
    display:flex;
    justify-content:center;
    margin-top: 3.2rem;
    z-index:2;
`

export const BestImg = styled.div`
    position:absolute;
    height: 15rem;
    width: 15rem;
    top:4.4rem;
    margin-left: 6.3rem;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    img{
        object-fit: contain;
    }
`

export const ImageFrame = styled.div`
    position:relative;
    display:flex;
    color:black;
`

export const ThemeStyle = styled.span`
    position:absolute;
    padding:0.5rem;
    top:4rem;
    left:6rem;
    z-index:1;
    font-size: 1.3rem;
`

export const LikesStyle = styled.span`
    position:absolute;
    bottom:7rem;
    z-index:1;
    right:6rem;
    padding:0.5rem;
    font-size: 1.3rem;
`
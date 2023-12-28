import styled from "styled-components";

export const GalleryContainer = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:53rem;
    overflow-y: scroll; 
    flex-wrap: wrap;
`
export const GalleryWrapper = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-wrap: wrap;
    width:80%;
    padding:3rem;
`

export const GalleryFlame = styled.div`
    position:relative;
    display:flex;

    padding: 1rem 5rem;
`
export const LikesLocation = styled.div`
    position: absolute;
    display:flex;
    flex-direction: row;
    align-items:flex-end;
    right:4.5rem;
    bottom:0.5rem;
    span{
        padding-bottom: 1rem;;
    }
`;

export const ImageStyle = styled.div`
    position:relative;
    width:18.75rem;
    height:18.75rem;
`
export const LikesButton = styled.div`
    background-color: transparent;
    margin:0.5rem;
    &:hover{
        cursor:pointer;
    }
`
export const ThemeStyle = styled.span`
    position:absolute;
    top:1rem;
    z-index:1;
    font-size: 1.3rem;
`
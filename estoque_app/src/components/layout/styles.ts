import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 4.5rem auto auto 20px;
    grid-template-rows: 4.5rem auto 52px;

    @media (max-width: 680px) {
        grid-template-columns: 0rem auto auto 20px;
        grid-template-rows: 3.5rem auto 52px;
    }

    grid-template-areas:
        'HD HD HD HD'
        'CT CT CT CT'
        'CT CT CT CT';
    width: 100vw;
    height: 100vh;
`

export const Content = styled.div`
    grid-area: CT;
    
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2rem;

    overflow: auto;
    
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
    }
`
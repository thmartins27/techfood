import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    padding: 1rem;
    gap: .5rem;
    display: flex;
    flex-direction: column;
    padding-right: 9px;
    overflow-y: hidden;

    &:hover {   
        overflow-y: scroll;
        scroll-behavior: smooth;
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #999;
            border-radius: 7px;
        }
    }
`
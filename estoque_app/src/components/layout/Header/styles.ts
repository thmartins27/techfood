import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
`

interface Props {
    active?: boolean
}

export const LinkHeader = styled.p<Props>`
    cursor: pointer;
    color: ${props => props.active ? '#ea1d2ccc' : '#a1a1a1'};
    font-size: .9rem;
    &:hover{
        color: #ea1d2ccc;
    }
`
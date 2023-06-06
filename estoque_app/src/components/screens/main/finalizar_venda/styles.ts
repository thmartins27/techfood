import styled from "styled-components";
import { motion } from 'framer-motion'

interface props {
    active?: boolean
}

export const Container = styled.div<props>`
    width: 30rem;
    height: 35rem;
    background-color: red;
    position: absolute;
    left: -28rem;
    border-radius: 7px;
    background-color: #fff;
    box-shadow: 1px 5px 24px 0px #a9a9a9cc;
    z-index: 100;
    display: ${props => props.active ? 'flex' : 'none'};
    flex-direction: column;
`

export const ContainerHeader = styled.div`
    width: 100%;
    height: 3.5rem;
    border-bottom: .15rem solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    align-items: center;
`

export const ContainerBody = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 75%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ::-webkit-scrollbar{
        width: 4px;
    }
    
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #a9a9a9;
    }
`

export const BackContainer = styled.div<props>`
    position: fixed;
    display: ${props => props.active ? 'flex' : 'none'};
    width: 100vw;
    height: 100vh;
    z-index: 90;
    top: 0;
    left: 0;
`

/* Card prodtuo */

export const ContainerCard = styled(motion.div)`
    width: 100%;
    height: 3.5rem;
    background-color: white;
    border-radius: 5px;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContainerFooter = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`
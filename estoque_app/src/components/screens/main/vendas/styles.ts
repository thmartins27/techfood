import styled from "styled-components";
import {motion} from 'framer-motion'


interface Props {
    active?: boolean
}

export const Container = styled(motion.div)<Props>`
    height: 100%;
    width: 15rem;
    background-color: ${props => props.active ? '#0a0' : '#fa0'};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`
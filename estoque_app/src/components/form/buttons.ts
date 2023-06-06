import styled from "styled-components";
import {motion} from 'framer-motion'

interface Props {
    padding?: string
}

export const ButtonPrimary = styled(motion.button)<Props>`
    padding: ${props => props.padding ? props.padding : ".5rem 2rem .5rem 2rem"};
    background-color: #ea1d2c;
    border-radius: 5px;
    color: white;
    font-weight: 600;
`

export const ButtonOutline = styled(motion.button)<Props>`
    padding: ${props => props.padding ? props.padding : ".5rem 2rem .5rem 2rem"};
    background-color: white;
    border-radius: 5px;
    color: #ea1d2c;
    border: .1rem solid #ea1d2c;
    font-weight: 600;
`
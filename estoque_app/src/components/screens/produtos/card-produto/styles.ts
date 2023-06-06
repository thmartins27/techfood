import styled from "styled-components";
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    width: 20rem;
    height: 7rem;
    box-shadow: 1px 5px 10px 0px #a9a9a9cc;
    border-radius: 5px;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
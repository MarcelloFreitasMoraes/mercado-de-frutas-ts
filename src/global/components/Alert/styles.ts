import { AiFillCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'

interface Props {
    backgroundColor: string
}

export const AlertContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.backgroundColor};
    border: 1px ${(props) => props.theme.secondary};

    p {
        padding: 0 10px;
        font-size: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        p {
            font-size: 0.75rem;
        }
    }
`
export const CheckItem = styled(AiFillCheckCircle)`
    font-size: 2em;
    color: green;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`
export const CheckItemError = styled(AiOutlineCloseCircle)`
    font-size: 2em;
    color: red;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`

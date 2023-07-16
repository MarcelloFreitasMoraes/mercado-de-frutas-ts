import styled from 'styled-components'

export const Content = styled.div`
    margin: 4% auto;
`
export const Grid = styled.div``

export const Box = styled.div`
    margin: 20px 0;
    text-align: center;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;

    img {
        margin-bottom: 10px;
    }

    p {
        margin: 10px 0;
    }

    :hover {
        transition: all 0.3s ease-out;
        transform: scale(1.05);
    }
`

export const Pricing = styled.div`
    margin-bottom: 10px;
    font-size: 2em;
    font-weight: bold;

    sup {
        font-size: 0.5em;
    }
`

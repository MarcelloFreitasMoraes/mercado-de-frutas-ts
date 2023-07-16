import styled from 'styled-components'

export const Content = styled.div`
    margin: 4% auto;
`
export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
    @media screen and (max-width: 744px) {
    justify-content: center;
  }
`

export const Box = styled.div`
    margin: 20px 10px;
    width: 33.33%;
    max-width: 300px;
    text-align: center;
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

    @media screen and (max-width: 768px) {
        width: 50%;
  }

  @media screen and (max-width: 744px) {
    width: 100%;
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

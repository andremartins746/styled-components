import styled from 'styled-components';

export const Button = styled.button `
    width: 200px;
    height: 50px;
    margin: 15px;
    font-size: 23px;
    color: white;
    font-weight: bold;
    background-color: ${props => props.color === 'red' ? 'red': 'blue'};
`
export const Button02 = styled.button `
    width: 200px;
    height: 50px;
    margin: 15px;
    font-size: 23px;
    color: white;
    font-weight: bold;
    background-color: ${props => props.color === 'silver' ? 'silver': 'green'};
`

export const Button03 = styled.button `
    width: 200px;
    height: 50px;
    margin: 15px;
    font-size: 23px;
    color: white;
    font-weight: bold;
    background-color: ${props => props.color === 'silver' ? 'silver': 'green'};
`